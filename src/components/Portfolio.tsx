import { useState, useRef } from 'react';

const portfolioItems = [
  {
    id: 1,
    category: 'residencial',
    title: 'Acabamento Fino Residencial',
    subtitle: 'Sancas e Iluminação embutida',
    image: 'https://i.imgur.com/3vxVUm6.png'
  },
  {
    id: 2,
    category: 'comercial',
    title: 'Execução Comercial Ágil',
    subtitle: 'Divisórias e Forros Industriais',
    image: 'https://i.imgur.com/Rju8l14.png'
  },
  {
    id: 3,
    category: 'residencial',
    title: 'Design de Interiores',
    subtitle: 'Personalização em Gesso Acartonado',
    image: 'https://i.imgur.com/A5QEkD0.png'
  },
  {
    id: 4,
    category: 'comercial',
    title: 'Estruturação de Ambientes',
    subtitle: 'Soluções para Escritórios',
    image: 'https://i.imgur.com/Oe1vsXS.png'
  },
  {
    id: 5,
    category: 'residencial',
    title: 'Detalhes em Drywall',
    subtitle: 'Qualidade Superior no DF e GO',
    image: 'https://i.imgur.com/Ebm6VAF.png'
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -450, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="container mx-auto px-6 py-20 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Portfólio de Obras</h2>
          <div className="flex flex-wrap gap-2 bg-slate-100 p-1 rounded-full w-max">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition ${filter === 'all' ? 'bg-gold text-white' : 'text-slate-500'}`}
            >
              Todas
            </button>
            <button 
              onClick={() => setFilter('residencial')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition ${filter === 'residencial' ? 'bg-gold text-white' : 'text-slate-500'}`}
            >
              Residencial
            </button>
            <button 
              onClick={() => setFilter('comercial')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition ${filter === 'comercial' ? 'bg-gold text-white' : 'text-slate-500'}`}
            >
              Comercial
            </button>
          </div>
        </div>
        <div className="hidden md:flex space-x-3 mb-2">
          <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-gold hover:text-white transition shadow-sm">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-gold hover:text-white transition shadow-sm">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div 
        ref={carouselRef}
        className="flex overflow-x-auto space-x-6 pb-8 scroll-smooth no-scrollbar snap-x snap-mandatory"
      >
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="flex-none w-[320px] md:w-[420px] bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-3 snap-start"
          >
            <div className="rounded-2xl overflow-hidden mb-4 relative">
              <img src={item.image} className="w-full h-auto" alt={item.title} referrerPolicy="no-referrer" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
