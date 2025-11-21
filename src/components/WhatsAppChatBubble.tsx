import React from "react";

const WhatsAppChatBubble: React.FC = () => {
  return (
    <a
      href="https://wa.me/254700000000?text=Hello%20I%20would%20like%20to%20make%20an%20inquiry"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center bg-green-500 text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 transform transition-all duration-300 z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 mr-2"
      >
        <path d="M20.52 3.48A11.85 11.85 0 0012 0a12 12 0 00-10.4 17.94L0 24l6.26-1.64A12 12 0 1012 0a11.85 11.85 0 008.52 3.48zM12 21.82a9.85 9.85 0 01-5.06-1.39l-.36-.21-3.72.97 1-3.63-.24-.37A9.85 9.85 0 1121.85 12 9.87 9.87 0 0112 21.82zm5.31-7.47c-.29-.15-1.71-.84-1.98-.94s-.46-.15-.65.15-.75.94-.92 1.13-.34.22-.63.07a8.12 8.12 0 01-2.39-1.47 9 9 0 01-1.66-2.07c-.17-.29 0-.45.13-.6l.42-.49c.15-.15.2-.25.29-.42a.56.56 0 000-.53c-.08-.15-.65-1.57-.9-2.16s-.48-.5-.65-.51h-.56a1.08 1.08 0 00-.78.37A3.27 3.27 0 006.9 9.5a5.68 5.68 0 001.34 3.06A13.48 13.48 0 0011.6 16a10.53 10.53 0 003.26 1.39A3.74 3.74 0 0017 17a2.79 2.79 0 00.6-1.71c0-.27-.1-.42-.29-.56z" />
      </svg>

      <span className="font-medium">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppChatBubble;
