import React from "react";

const WhatsAppChatBubble: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-2">

      {/* Small Text Bubble */}
      <div className="bg-white text-gray-800 text-sm py-2 px-3 rounded-lg shadow-md border border-gray-200 animate-bounce-slow">
        Chat on WhatsApp
      </div>

      {/* Circular WhatsApp Icon Bubble */}
      <a
        href="https://wa.me/254700000000?text=Hello%20I%20would%20like%20to%20make%20an%20inquiry"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 animate-pulse-soft"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M20.52 3.48A11.85 11.85 0 0012 0a12 12 0 00-10.4 17.94L0 24l6.26-1.64A12 12 0 1012 0a11.85 11.85 0 008.52 3.48zM12 21.82a9.85 9.85 0 01-5.06-1.39l-.36-.21-3.72.97 1-3.63-.24-.37A9.85 9.85 0 1121.85 12 9.87 9.87 0 0112 21.82zm5.31-7.47c-.29-.15-1.71-.84-1.98-.94s-.46-.15-.65.15-.75.94-.92 1.13-.34.22-.63.07a8.12 8.12 0 01-2.39-1.47 9 9 0 01-1.66-2.07c-.17-.29 0-.45.13-.6l.42-.49c.15-.15.2-.25.29-.42a.56.56 0 000-.53c-.08-.15-.65-1.57-.9-2.16s-.48-.5-.65-.51h-.56a1.08 1.08 0 00-.78.37A3.27 3.27 0 006.9 9.5a5.68 5.68 0 001.34 3.06A13.48 13.48 0 0011.6 16a10.53 10.53 0 003.26 1.39A3.74 3.74 0 0017 17a2.79 2.79 0 00.6-1.71c0-.27-.1-.42-.29-.56z" />
        </svg>
      </a>

      {/* Animations */}
      <style>{`
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-pulse-soft {
          animation: pulse-soft 2.5s infinite;
        }

        @keyframes pulse-soft {
          0% { transform: scale(1); box-shadow: 0 0 10px rgba(0,0,0,0.15); }
          50% { transform: scale(1.08); box-shadow: 0 0 18px rgba(0,0,0,0.25); }
          100% { transform: scale(1); box-shadow: 0 0 10px rgba(0,0,0,0.15); }
        }
      `}</style>

    </div>
  );
};

export default WhatsAppChatBubble;
