"use client";
import { useEffect, useState } from "react";
import { ArrowBigUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Theo dõi cuộn trang
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // hiệu ứng mượt
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-52 right-8 z-50 p-2 cursor-pointer rounded-full bg-gray-50 text-gray-500 shadow-lg transition-all duration-300 hover:bg-gray-100 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Lên đầu trang"
    >
      <ArrowBigUp style={{ fontSize: "20px" }} />
    </button>
  );
}
