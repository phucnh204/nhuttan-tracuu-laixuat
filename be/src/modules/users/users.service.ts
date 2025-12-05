import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Dùng ở AuthController
  async create(dto: CreateUserDto): Promise<User> {
    if (!dto.password) {
      throw new Error('Password is required');
    }

    const hashedPassword: string = await bcrypt.hash(dto.password, 10);

    const newUser: User = this.userRepository.create({
      ...dto,
      password: hashedPassword,
    });

    return this.userRepository.save(newUser);
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.findByUsername(username);
    if (!user) return null;

    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      user.password,
    );
    return isPasswordValid ? user : null;
  }

  // Lưu refresh token đã hash vào DB
  async saveRefreshToken(id: number, refreshToken: string): Promise<void> {
    const hashedRefreshToken: string = await bcrypt.hash(refreshToken, 10);
    await this.userRepository.update(
      { id },
      { refreshToken: hashedRefreshToken },
    );
  }

  // So sánh refresh token
  async verifyRefreshToken(
    id: number,
    refreshToken: string,
  ): Promise<User | false> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user || !user.refreshToken) return false;

    const isMatch: boolean = await bcrypt.compare(
      refreshToken,
      user.refreshToken,
    );
    return isMatch ? user : false;
  }

  // Trả về danh sách User thật
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Trả về 1 User
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOneBy({ username });
  }
  // CHECK TRÙNG TÀI KHOẢN / EMAIL
  // =============================
  private async checkDuplicate(username: string, email: string) {
    const exist = await this.userRepository.findOne({
      where: [{ username }, { email }],
    });

    if (exist) {
      if (exist.username === username) {
        throw new BadRequestException('Tên đăng nhập đã tồn tại');
      }
      if (exist.email === email) {
        throw new BadRequestException('Email đã tồn tại');
      }
    }
  }
  // Thêm nhân viên mới
  async addEmployee(dto: CreateUserDto): Promise<User> {
    await this.checkDuplicate(dto.username, dto.email);

    if (!dto.password) throw new BadRequestException('Password is required');

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newUser = this.userRepository.create({
      ...dto,
      password: hashedPassword,
      isActive: true,
      // role: 'staff',
    });

    return this.userRepository.save(newUser);
  }

  async updateEmployee(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    // // Kiểm tra nếu email hoặc username muốn thay đổi => check trùng
    // if (dto.email && dto.email !== user.email) {
    //   await this.checkDuplicate(dto.username ?? user.username, dto.email);
    // }

    // if (dto.username && dto.username !== user.username) {
    //   await this.checkDuplicate(dto.username, dto.email ?? user.email);
    // }

    // Hash password nếu gửi lên
    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10);
    }

    // Không được cho phép đổi role trong update nhân viên
    // delete dto.role;

    Object.assign(user, dto);
    return this.userRepository.save(user);
  }

  // Thay vì xóa hẳn, chỉ cập nhật isActive = false
  async removeEmployee(id: number): Promise<User> {
    const user = await this.findOne(id);
    user.isActive = false;
    return this.userRepository.save(user);
  }

  async getEmployees() {
    return this.userRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async deleteEmployee(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }

  // Cập nhật thông tin cá nhân (không bao gồm password)
  async updateProfile(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    // Kiểm tra trùng email nếu người dùng muốn đổi
    if (dto.email && dto.email !== user.email) {
      const existingEmail = await this.userRepository.findOneBy({
        email: dto.email,
      });
      if (existingEmail) {
        throw new BadRequestException('Email đã tồn tại');
      }
    }

    // Kiểm tra trùng username nếu người dùng muốn đổi
    if (dto.username && dto.username !== user.username) {
      const existingUsername = await this.userRepository.findOneBy({
        username: dto.username,
      });
      if (existingUsername) {
        throw new BadRequestException('Tên đăng nhập đã tồn tại');
      }
    }

    // Không cho phép đổi password qua route này
    delete dto.password;

    Object.assign(user, dto);
    return this.userRepository.save(user);
  }

  // Đổi mật khẩu
  async changePassword(
    id: number,
    currentPassword: string,
    newPassword: string,
  ): Promise<void> {
    const user = await this.findOne(id);

    // Xác thực mật khẩu hiện tại
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Mật khẩu hiện tại không đúng');
    }

    // Kiểm tra mật khẩu mới không trùng mật khẩu cũ
    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      throw new BadRequestException('Mật khẩu mới phải khác mật khẩu hiện tại');
    }

    // Hash và cập nhật mật khẩu mới
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await this.userRepository.save(user);
  }
}
