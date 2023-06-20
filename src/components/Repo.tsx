'use client'

import Link from 'next/link'
import { ArrowBendDownRight } from 'phosphor-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface RepoProps {
  id: number
  name: string
  pushedAt: string
}

export async function Repo({ id, name, pushedAt }: RepoProps) {
  const datePublished = new Date(pushedAt)
  const publishedDateRelativeToNow = formatDistanceToNow(datePublished, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className="border border-black px-8 bg-brown-100 pt-4 h-[292px]">
      <div className="flex items-baseline justify-between">
        <div className="flex gap-2 items-end">
          <span className="text-xs">Projeto:</span>
          <strong className="font-robotoMono font-bold">{name}</strong>
        </div>
        <time className="text-xs">{publishedDateRelativeToNow}</time>
      </div>

      <div className="bg-brown-300 border border-black mt-6 px-4 py-2 ">
        <p className="text-sm">
          Componente de carregamento! <br /> <br />
          Confira o resultado em:
          wwilliamsantana.github.io/component-loading/index.html <br /> 💻 Sobre{' '}
          <br />
          Este projeto foi feito para práticar conceitos do JavaScript.
          <br /> BOM (Browser Object Model)
          <br /> DOM (Document Object Model)
          <br />
          Lógica.....
        </p>
      </div>
      <Link
        href={`/repository/${name}`}
        className="flex justify-end text-sm font-light gap-2 my-1 hover:font-outline-1 transition-all"
      >
        <ArrowBendDownRight size={20} />
        Visualizar conteúdo
      </Link>
    </article>
  )
}
