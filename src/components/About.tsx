export default function About() {
  return (
    <section id="sobre" className="container mx-auto px-6 py-20">
      <div className="bg-slate-900 rounded-custom overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white mb-6">Sobre <span className="text-gold">Nós</span></h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 italic border-l-2 border-gold pl-4">
            Referência em Brasília e Goiás para quem busca perfeição em acabamentos a seco.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            A WW21 nasceu do desejo de trazer agilidade e limpeza para o estaleiro de obras sem abrir mão da estética. Atendemos projetos residenciais de alto padrão e grandes espaços comerciais com a mesma dedicação técnica.
          </p>
          <a href="https://wa.link/tmnexz" target="_blank" className="bg-gold text-white px-8 py-3 rounded-full font-medium w-max hover:bg-white hover:text-slate-900 transition shadow-lg">Falar com Especialista</a>
        </div>
        <div className="w-full md:w-1/2 min-h-[450px]">
          <img src="https://i.imgur.com/vTyhDdO.png" className="w-full h-full object-cover" alt="Trabalho de Drywall WW21" referrerPolicy="no-referrer" />
        </div>
      </div>
    </section>
  );
}
