const navLinks = [
  "Home",
  "Features",
  "About Us",
  "Services",
  "Works",
  "Pricing",
  "Contact Us",
];

export default function Navbar(){

    return (
        <div>
        {/* Navbar */}
      <header className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <a href="#" className="text-3xl font-extrabold">
          CONSULT<span className="text-red-500">.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`text-sm font-medium hover:text-red-500 ${
                link === "Home" ? "text-red-500" : "text-slate-700"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#signup"
          className="rounded-md bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Download
        </a>
      </header>
        </div>
    )
    
}