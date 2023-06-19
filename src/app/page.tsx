import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid place-items-center mx-2">
      <header className="w-full flex justify-around items-end py-3 border border-black max-w-7xl m-3">
        <a href="/" className="font-robotoMono text-xl text-brown-800">
          Início
        </a>
        <h1 className="font-jacquesFracois text-4xl">Github</h1>
        <a href="/" className="font-robotoMono text-xl text-brown-800">
          Sobre
        </a>
      </header>
    </main>
  )
}
