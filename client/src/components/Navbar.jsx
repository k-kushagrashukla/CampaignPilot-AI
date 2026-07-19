function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-500">
            CampaignPilot AI
          </h1>
        </div>

        {/* Menu */}
        <div className="hidden gap-8 text-gray-300 md:flex">
          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            How It Works
          </a>

          <a href="#" className="hover:text-white transition">
            About
          </a>
        </div>

        {/* Button */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700 transition">
          Try Free
        </button>

      </div>
    </nav>
  );
}

export default Navbar;