export default function WhatsAppButtonNew() {
  return (
    <>
      {/* Mobile Version: Fixed bottom bar, straight and minimalist */}
      <a 
        href="https://wa.link/tmnexz" 
        target="_blank" 
        className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-[#25D366] text-white h-12 flex items-center justify-center space-x-2 font-medium text-sm shadow-[0_-2px_10px_rgba(0,0,0,0.1)] hover:bg-[#20bd5a] transition-colors"
      >
        <i className="fab fa-whatsapp text-xl"></i>
        <span className="tracking-wide uppercase">Solicitar Orçamento</span>
      </a>

      {/* Desktop Version: Floating circular button */}
      <a 
        href="https://wa.link/tmnexz" 
        target="_blank" 
        className="hidden md:flex fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white w-14 h-14 rounded-full items-center justify-center text-2xl hover:bg-[#20bd5a] transition-all shadow-lg hover:scale-105 hover:shadow-xl"
        aria-label="Falar no WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}
