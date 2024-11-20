export function Header() {
  return (
    <header className="fixed left-0 z-20 w-full p-2 text-black text-shadow-md max-md:text-xs md:p-4">
      <nav className="flex gap-1 md:gap-4">
        <div className="flex h-20 w-1.05/6 items-center justify-center rounded-lg bg-cyan-50 shadow-xl md:h-10 md:w-1.01/12">
          <p className="uppercase">Home</p>
        </div>
        <div className="flex h-20 w-2.05/6 items-center justify-center rounded-lg bg-green-100 shadow-xl md:h-10 md:w-2.02/12">
          <p className="uppercase">Garantir vaga</p>
        </div>
        <div className="flex h-20 w-1/2 justify-center gap-6 rounded-lg bg-orange-50 shadow-xl max-md:pt-2 md:h-10 md:w-8.07/12 md:items-center">
          <div className="max-md:space-y-2 md:flex md:gap-6 lg:gap-10">
            <p>Sobre</p>
            <p>Oferta</p>
            <p>Mentores</p>
          </div>
          <div className="max-md:space-y-2 md:flex md:gap-6 lg:gap-10">
            <p>Equipe</p>
            <p>FAQ</p>
          </div>
        </div>
      </nav>
    </header>
  )
}
