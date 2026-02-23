export default function Footer() {
  return (
    <footer id="contato" className="relative bg-slate-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/O3fdg6R.png" 
          alt="Footer Background" 
          className="w-full h-full object-cover opacity-40" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <img src="https://i.imgur.com/hLP9ep2.png" alt="Logótipo WW21" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
            <div className="text-xl font-bold tracking-tight uppercase text-gold">
              WW21 
              <span className="text-xs block font-normal text-slate-400 tracking-widest leading-none">Construção a Seco</span>
            </div>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">Referência em gesso acartonado, drywall e projetos de forro decorativo em Brasília e entorno.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gold">Localização</h4>
          <p className="text-slate-400 text-sm">Brasília - Distrito Federal</p>
          <p className="text-slate-400 text-sm">Goiânia - Goiás</p>
          <p className="text-slate-400 text-sm mt-4 font-bold text-white tracking-widest uppercase text-xs">Fale agora</p>
          <a href="https://wa.link/tmnexz" target="_blank" className="text-gold text-lg font-bold hover:underline">+55 61 99666-2121</a>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gold">Siga-nos</h4>
          <div className="flex space-x-4">
            <a href="https://wa.link/tmnexz" target="_blank" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"><i className="fab fa-whatsapp"></i></a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-[10px] tracking-[0.2em] uppercase">
        &copy; 2024 WW21 CONSTRUÇÃO A SECO. EXCELÊNCIA EM CADA DETALHE.
      </div>
    </footer>
  );
}
