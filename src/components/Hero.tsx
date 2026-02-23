export default function Hero() {
  return (
    <section id="home" className="container mx-auto px-6 py-4 pt-24">
      <div className="bg-slate-800 rounded-custom overflow-hidden relative flex flex-col md:flex-row items-center p-8 md:p-16 min-h-[650px]" 
           style={{
             background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('https://i.imgur.com/vUeG1Qf.png')",
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
          
        <div className="w-full md:w-2/3 text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Mãos que Criam <br /> o seu Espaço
          </h1>
          <p className="text-slate-100 text-lg md:text-xl mb-8 max-w-xl leading-relaxed drop-shadow-md">
            Especialistas em montagem de drywall e forros decorativos em Brasília e Goiás. Execução técnica de alta precisão para o seu projeto.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-gold hover:text-white transition-all shadow-lg">Ver Obras Realizadas</a>
            <a href="https://wa.link/tmnexz" target="_blank" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">Pedir Orçamento</a>
          </div>
        </div>

        {/* Card Estatísticas Flutuante */}
        <div className="absolute bottom-10 right-10 bg-white p-8 rounded-3xl shadow-2xl hidden lg:block w-80">
          <h3 className="font-bold text-lg mb-2 text-slate-900">WW21 Construção</h3>
          <p className="text-slate-500 text-sm mb-6">Equipe treinada para montagem rápida e acabamento impecável em gesso acartonado.</p>
          <div className="grid grid-cols-3 gap-4 border-t pt-6">
            <div>
              <div className="font-bold text-xl text-slate-900">12 Anos</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Exp.</div>
            </div>
            <div>
              <div className="font-bold text-xl text-slate-900">500+</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Obras</div>
            </div>
            <div>
              <div className="font-bold text-xl text-slate-900">100%</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Limp.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
