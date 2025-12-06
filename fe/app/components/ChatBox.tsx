import { Facebook, MessageCircle, PhoneCall } from 'lucide-react'
import React from 'react'

function ChatBox() {
  return (
    <div>
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <a
            href="https://zalo.me/0346636399"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition transform hover:scale-110"
            aria-label="Liên hệ qua Zalo"
          >
            <MessageCircle className="w-6 h-6" />
          </a>

          <a
            href="https://www.facebook.com/camdouytincantho"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-3 shadow-lg transition transform hover:scale-110"
            aria-label="Liên hệ qua Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>

          <a
            href="tel:0346636399"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition transform hover:scale-110"
            aria-label="Liên hệ qua số điện thoại"
          >
            <PhoneCall className="w-6 h-6" />
          </a>
        </div></div>
  )
}

export default ChatBox