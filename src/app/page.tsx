import { Profile } from '@/components/Profile'
import { Repo } from '@/components/Repo'

export default function Home() {
  return (
    <div className="flex max-w-[1120px] w-full gap-8 items-start mt-8">
      <Profile />

      <div className="flex-1 flex flex-col gap-7">
        <Repo />
      </div>
    </div>
  )
}
