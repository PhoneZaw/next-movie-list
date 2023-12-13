import { redirect } from 'next/navigation'
import Movies from './movies/page'

export default function Home() {
  redirect("/movies")
  return (
    <></>
  )
}
