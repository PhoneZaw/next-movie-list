import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="mx-auto mt-10 w-fit flex justify-center items-center flex-col gap-5">
      <h2 className='text-xl font-bold'>URL Not Found</h2>
      <Link className="bg-slate-700 px-3 py-1 rounded-md" href="/movies">Return Home</Link>
    </div>
  )
}