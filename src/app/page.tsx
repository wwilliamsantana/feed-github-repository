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

      <div className="flex max-w-[1120px] w-full gap-8 items-start">
        <div className="w-64 border border-black bg-brown-100">
          <Image
            src={
              'https://images.unsplash.com/photo-1500087495087-dad219d8c8c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            }
            alt=""
            width={256}
            height={64}
            className="w-full h-16 object-cover  border-b border-black"
          />

          <div className="flex items-center justify-center flex-col gap-2 -mt-9">
            <Image
              src={
                'https://images.unsplash.com/photo-1572460418264-695212ed493a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
              }
              alt=""
              width={180}
              height={168}
              className=" h-[84px] w-[90px] object-cover rounded-full border border-black"
            />
            <div className="text-center">
              <p className="font-bold text-brown-900">Leslie Alexander</p>
              <span className="text-sm text-brown-800">UI Designer</span>
            </div>

            <footer className=" mb-6 mt-6 pt-6 border-t border-brown-300 w-full text-center">
              <button className="px-6 py-2 bg-brown-500 font-outline-1 text-white font-robotoMono font-bold rounded-lg hover:text-brown-900 transition-colors">
                Github
              </button>
            </footer>
          </div>
        </div>
        <div className="flex-1 border border-black"></div>
      </div>
    </main>
  )
}
