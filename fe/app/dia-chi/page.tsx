import React from 'react'

function DiaChi() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hệ thống Cầm đồ Nhựt Tân
          </h2>
          <p className="text-lg text-gray-600">
            2 chi nhánh chính phục vụ quý khách
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Chi nhánh 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.235228944251!2d105.77004347658683!3d10.037394892873687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0881aa3dfa18d%3A0x6c75f1ef1aefa37d!2zMTAyIMSQxrDhu51uZyAzLzIsIFh1w6JuIEtow6FuaCwgTmluaCBLaeG7h3UsIEPhuqduIFRow6Bv!5e0!3m2!1svi!2s!4v1732604500000"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            <div className="p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-3">
                CN1: 0936636399 – 102 Đường 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ
              </h3>
            </div>
          </div>

          {/* Chi nhánh 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.017779104675!2d105.75755757658596!3d10.01098499290353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089cab5465467%3A0x6aaa0134c21c28f2!2zNTU1IMSQxrDhu51uZyAzMC80LCBI4buvbmcgTOG7o2ksIE5pbmggS2nhu4F1LCBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1732604600000"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            <div className="p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-3">
                CN2: 0879393955 – 555 Đường 30/4, Hưng Lợi, Ninh Kiều, Cần Thơ
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DiaChi
