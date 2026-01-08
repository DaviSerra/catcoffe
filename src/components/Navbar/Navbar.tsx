const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="hidden md:flex gap-14 text-coffee-medium font-semibold text-lg">
        {["Início", "Nossos produtos", "Contato", "Trabalhe conosco"].map(
          (item) => (
            <li
              key={item}
              className="cursor-pointer transition-colors hover:text-coffee-cream"
            >
              {item}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
