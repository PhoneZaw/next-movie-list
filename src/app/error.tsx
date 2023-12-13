'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="mx-auto mt-10 w-fit flex justify-center items-center flex-col">
      <h2 className="text-xl my-5">Something went wrong!</h2>
      <a className="bg-slate-700 px-3 py-1 rounded-md" href="/movies">Return Home</a>
    </div>
  )
}