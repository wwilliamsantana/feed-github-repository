import { Repo } from '@/components/Repo'

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <Repo />
      <Repo />
      <Repo />
    </div>
  )
}
