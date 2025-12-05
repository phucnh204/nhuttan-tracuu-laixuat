import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/dto/change-password.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Thêm nhân viên mới
  @UseGuards(JwtAuthGuard)
  @Post('employees')
  add(@Body() createUserDto: CreateUserDto) {
    return this.usersService.addEmployee(createUserDto);
  }

  // Lấy tất cả nhân viên
  @UseGuards(JwtAuthGuard)
  @Get('employees')
  async getEmployees() {
    return this.usersService.getEmployees();
  }

  // Lấy 1 nhân viên
  @UseGuards(JwtAuthGuard)
  @Get('employees/:id')
  async getOne(@Param('id') id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new BadRequestException(`Invalid employee ID: ${id}`);
    }
    return this.usersService.findOne(numericId);
  }

  // Các route chung
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new BadRequestException(`Invalid user ID: ${id}`);
    }
    return this.usersService.findOne(numericId);
  }

  @Patch('employees/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new BadRequestException(`Invalid employee ID: ${id}`);
    }
    return this.usersService.updateEmployee(numericId, updateUserDto);
  }

  @Delete('employees/:id')
  async remove(@Param('id') id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new BadRequestException(`Invalid employee ID: ${id}`);
    }
    return this.usersService.deleteEmployee(numericId);
  }

  // Cập nhật thông tin cá nhân (không bao gồm password)
  @Patch('profile/:id')
  async updateProfile(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new BadRequestException(`Invalid user ID: ${id}`);
    }
    return this.usersService.updateProfile(numericId, updateUserDto);
  }

  // Đổi mật khẩu
  @Patch('change-password/:id')
  async changePassword(
    @Param('id') id: string,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new BadRequestException(`Invalid user ID: ${id}`);
    }

    await this.usersService.changePassword(
      numericId,
      changePasswordDto.currentPassword,
      changePasswordDto.newPassword,
    );

    return { message: 'Đổi mật khẩu thành công' };
  }
}
