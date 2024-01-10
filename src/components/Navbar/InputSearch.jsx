"use client"

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;

    keyword && router.push(`/search/${keyword}`);
  }

  const handleSearchEnter = (event) => {
    const keyword = searchRef.current.value;

    { event.key === 'Enter' ? keyword && router.push(`/search/${keyword}`) : null }
  }

  return (
    <div className="relative">
      <input placeholder="cari anime..." className="w-full p-2 rounded" ref={searchRef} onKeyDown={handleSearchEnter} />
      <button className="absolute top-2 end-2"><MagnifyingGlass size={24} onClick={handleSearch} /></button>
    </div>
  )
}

export default InputSearch;