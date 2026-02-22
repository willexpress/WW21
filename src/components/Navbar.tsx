import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-[60] border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-3">
            <img src="https://i.imgur.com/hLP9ep2.png" alt="Logótipo WW21" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
            <div className="text-xl font-bold tracking-tight uppercase">
              WW21 
              <span className="text-xs block font-normal text-slate-400 tracking-widest leading-none">Construção a Seco</span>
            </div>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-gold transition">Início</a>
            <a href="#sobre" className="hover:text-gold transition">Sobre</a>
            <a href="#portfolio" className="hover:text-gold transition">Portfólio</a>
            <a href="#contato" className="hover:text-gold transition">Contacto</a>
          </div>

          {/* Botão Orçamento Desktop */}
          <a href="https://wa.link/tmnexz" target="_blank" className="hidden md:block bg-gold text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gold-hover transition">Orçamento</a>

          {/* Botão Burguer Mobile */}
          <button onClick={toggleMenu} className="md:hidden text-2xl text-slate-800 focus:outline-none p-2">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Overlay Menu Mobile Fullscreen */}
      <div className={`fixed inset-0 bg-slate-900 z-[70] flex flex-col items-center justify-center space-y-10 transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
        <button onClick={toggleMenu} className="absolute top-8 right-8 text-white text-3xl p-4">
          <i className="fas fa-times"></i>
        </button>
        <div className="flex flex-col items-center space-y-8">
          <a href="#home" onClick={closeMenu} className="text-white text-4xl font-bold hover:text-gold transition-colors">Início</a>
          <a href="#sobre" onClick={closeMenu} className="text-white text-4xl font-bold hover:text-gold transition-colors">Sobre</a>
          <a href="#portfolio" onClick={closeMenu} className="text-white text-4xl font-bold hover:text-gold transition-colors">Portfólio</a>
          <a href="#contato" onClick={closeMenu} className="text-white text-4xl font-bold hover:text-gold transition-colors">Contacto</a>
        </div>
        <a href="https://wa.link/tmnexz" target="_blank" onClick={closeMenu} className="bg-gold text-white px-10 py-5 rounded-full text-xl font-bold mt-8 shadow-xl">Pedir Orçamento</a>
      </div>
    </>
  );
}
