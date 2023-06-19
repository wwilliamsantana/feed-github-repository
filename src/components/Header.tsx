export function Header() {
  return (
    <header className="w-full flex justify-around items-end py-3 border border-black max-w-7xl ">
      <a
        href="/"
        className="font-robotoMono text-xl text-brown-800 hover:scale-110 transition-all"
      >
        Início
      </a>
      <h1 className="font-jacquesFracois text-4xl">Github</h1>
      <a
        href="/"
        className="font-robotoMono text-xl text-brown-800 hover:scale-110 transition-all"
      >
        Sobre
      </a>
    </header>
  )
}
