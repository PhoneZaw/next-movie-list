import { ChangeEvent, FormEvent } from "react"

interface SearchInputProp {
  searchTerm: string,
  onSearchInput: (event: ChangeEvent<HTMLInputElement>) => void,
  onSearchSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function SearchInput({searchTerm, onSearchInput, onSearchSubmit} : SearchInputProp) {
  
  return (
    <form onSubmit={onSearchSubmit}>
      <input type="text" className="bg-slate-400 rounded-md mr-1 px-3 py-1 text-black" value={searchTerm} onChange={onSearchInput} />
      <button type="submit" className="bg-slate-700 px-3 py-1 rounded-md uppercase">Search</button>
    </form>
  )
}
