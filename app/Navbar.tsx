import Link from "next/link";

function Navbar() {
  return (
    <header className="px-20 py-12 border-b-slate-700 border-b-2">
      <nav className="flex gap-12">
        <Link className="text-neutral-100" href="/">
          Home 🏠
        </Link>
        <Link className="text-neutral-100" href="/videos">
          Videos 📺
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
