import { Repo } from '@/components/Repo'
import axios from 'axios'

interface AxiosResponseProps {
  id: number
  name: string
  html_url: string
  pushed_at: string
}

export default async function Home() {
  const response = await axios.get<AxiosResponseProps[]>(
    'https://api.github.com/users/wwilliamsantana/repos',
  )

  return (
    <div className="flex flex-col gap-7">
      {response.data.map((repository) => {
        return (
          <Repo
            key={repository.id}
            id={repository.id}
            name={repository.name}
            pushedAt={repository.pushed_at}
          />
        )
      })}
    </div>
  )
}
