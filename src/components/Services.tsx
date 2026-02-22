export default function Services() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-2 text-slate-900">Transforme a sua <br /> <span className="text-gold">Visão em Realidade</span></h2>
        </div>
        <div className="max-w-md text-slate-500 text-sm leading-relaxed mt-4 md:mt-0">
          Líderes em Brasília no setor de construção a seco. Garantimos que cada sanca e cada parede seja executada com a precisão que o seu projeto exige.
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-auto md:h-[600px]">
        {/* Imagem Principal (Grande) */}
        <div className="col-span-12 md:col-span-6 relative rounded-custom overflow-hidden group shadow-xl">
          <img src="https://i.imgur.com/6WEPkQM.jpeg" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt="Projeto Drywall WW21" referrerPolicy="no-referrer" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl flex justify-between items-center shadow-lg">
            <div>
              <div className="text-gold font-bold text-xl">Execução Técnica</div>
              <div className="text-slate-500 text-xs uppercase font-bold tracking-tighter">Atendemos todo o DF e GO</div>
            </div>
            <a href="https://wa.link/tmnexz" target="_blank" className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition">
              <i className="fas fa-hammer"></i>
            </a>
          </div>
        </div>

        {/* Grid de Imagens Menores */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
          {/* Linha 1 */}
          <div className="flex gap-6 h-1/2 w-full">
            <div className="rounded-custom overflow-hidden relative shadow-lg bg-white flex-1 hover:flex-[2] transition-all duration-500 ease-in-out cursor-pointer">
              <img src="https://i.imgur.com/YRlVFXG.jpeg" className="w-full h-full object-cover" alt="Detalhe Forro" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-custom overflow-hidden relative shadow-lg bg-white flex-1 hover:flex-[2] transition-all duration-500 ease-in-out cursor-pointer">
              <img src="https://i.imgur.com/w0PI4VG.jpeg" className="w-full h-full object-cover" alt="Acabamento Gesso" referrerPolicy="no-referrer" />
            </div>
          </div>
          {/* Linha 2 */}
          <div className="flex gap-6 h-1/2 w-full">
            <div className="rounded-custom overflow-hidden relative shadow-lg bg-white flex-1 hover:flex-[2] transition-all duration-500 ease-in-out cursor-pointer">
              <img src="https://i.imgur.com/FxExGLE.jpeg" className="w-full h-full object-cover" alt="Montagem Drywall" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-custom overflow-hidden relative shadow-lg bg-white flex-1 hover:flex-[2] transition-all duration-500 ease-in-out cursor-pointer">
              <img src="https://i.imgur.com/o9n4pEY.jpeg" className="w-full h-full object-cover" alt="Resultado Final" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
