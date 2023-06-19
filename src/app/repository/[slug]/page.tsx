interface InfoRepoProps {
  params: {
    slug: string
  }
}

export default function InfosRepo({ params }: InfoRepoProps) {
  return (
    <div className="flex-1 flex flex-col gap-7">
      <h1>{params.slug}</h1>
    </div>
  )
}
