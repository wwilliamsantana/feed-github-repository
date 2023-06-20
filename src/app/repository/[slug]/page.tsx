'use client'

import axios from 'axios'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { remark } from 'remark'
import html from 'remark-html'

interface InfoRepoProps {
  params: {
    slug: string
  }
}

export default async function InfosRepo({ params }: InfoRepoProps) {
  const response = await axios.get(
    `https://raw.githubusercontent.com/wwilliamsantana/${params.slug}/main/README.md`,
  )

  const processedContent = await remark().use(html).process(response.data)

  const content = processedContent.toString()

  return (
    <div className="flex-1 w-full bg-brown-100 border border-black px-8 pt-3 pb-8">
      <div className="flex  items-center">
        <Link
          href="/"
          className="flex items-end gap-2 font-robotoMono font-bold text-xl"
        >
          <ArrowLeft size={24} weight="bold" />
          {params.slug}
        </Link>
      </div>

      <div
        className="px-4 py-8 bg-brown-300 mt-7 text-sm"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <footer className="mt-1.5">
        <a
          href={`https://github.com/wwilliamsantana/${params.slug}`}
          className="text-sm font-light flex items-center justify-end gap-4"
          target="_blank"
          rel="noreferrer"
        >
          <ArrowRight
            size={20}
            weight="light"
            className="animate-bounceLeftRight"
          />
          Repositório completo
        </a>
      </footer>
    </div>
  )
}
