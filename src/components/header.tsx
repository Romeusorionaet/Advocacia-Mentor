import { ScrollLink } from './scroll-link'

export function Header() {
  return (
    <header className="fixed left-0 z-20 w-full p-2 text-black text-shadow-md max-md:text-xs md:p-4">
      <nav className="flex gap-1 md:gap-4">
        <div className="flex h-10 w-1.05/6 items-center justify-center rounded-lg bg-cyan-50 shadow-xl md:h-10 md:w-1.01/12">
          <ScrollLink target="topPage" title="Início" />
        </div>
        <div className="flex h-10 w-2.05/6 items-center justify-center rounded-lg bg-green-100 shadow-xl md:h-10 md:w-2.02/12">
          <ScrollLink
            target="guaranteePlace"
            title="Garantir vaga"
            offset={-80}
          />
        </div>
        <div className="flex h-20 w-1/2 justify-center gap-6 rounded-lg bg-orange-50 shadow-xl max-md:pt-2 md:h-10 md:w-8.07/12 md:items-center">
          <div className="flex gap-2 max-md:flex-col md:gap-6 lg:gap-10">
            <ScrollLink target="about" title="Sobre" offset={-80} />
            <ScrollLink target="bid" title="Oferta" />
            <ScrollLink target="mentors" title="Mentores" offset={-80} />
          </div>
          <div className="flex gap-2 max-md:flex-col md:gap-6 lg:gap-10">
            <ScrollLink target="lorem" title="Lorem" offset={-80} />
            <ScrollLink target="faq" title="FAQ" offset={-80} />
          </div>
        </div>
      </nav>
    </header>
  )
}
