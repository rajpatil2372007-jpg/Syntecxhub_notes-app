function Header({ search, setSearch }) {
  return (
    <div className="header R">
      <input
        type="text"
        placeholder="Search your notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Header;