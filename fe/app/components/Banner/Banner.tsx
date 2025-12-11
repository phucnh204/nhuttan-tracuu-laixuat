import React from 'react'
import banner from "../../../public/images/banner.png";
function Banner() {
  return (
    <div className="relative w-full h-[450px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        {/* Background gradient + image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-blue-700"></div>
          <img
            src={banner.src}
            alt="Cầm đồ Nhựt Tân"
            className="w-full h-full object-cover object-center opacity-95"
          />
        </div>

        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
  )
}

export default Banner