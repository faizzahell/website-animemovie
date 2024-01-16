import Link from "next/link";
import InputSearch from "./InputSearch";
<<<<<<< HEAD
=======
import UserActionButton from "./UserActionButton";
>>>>>>> cba5020 (add dashboard)

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-2xl">Cuyanimelist</Link>
        <InputSearch />
<<<<<<< HEAD

=======
        <UserActionButton />
>>>>>>> cba5020 (add dashboard)
      </div>
    </header>
  )
}

export default Navbar;