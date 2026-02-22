export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.link/tmnexz" 
      target="_blank" 
      className="fixed bottom-8 right-8 z-[100] bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:bg-gold-hover transition-all shadow-xl animate-pulse-custom"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
