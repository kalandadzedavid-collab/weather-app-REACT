const Header = () => {
  return (
    <header className="px-41.25 py-15 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/images/logo.svg" alt="" />
      </div>
      <button className="bg-[#2f3047] px-3 py-1 rounded-2xl flex items-center gap-1">
        <img src="/images/icon-units.svg" alt="" /> Units{" "}
        <img src="/images/icon-dropdown.svg" alt="" />
      </button>
    </header>
  );
};

export default Header;
