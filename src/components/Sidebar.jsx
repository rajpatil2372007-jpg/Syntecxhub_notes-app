
function Sidebar({ setShowModal }) {
  return (
    <div className="sidebar">
      <h2>📒 My Notes</h2>

      <button
        className="add-btn"
        onClick={() => setShowModal(true)}
      >
        + Add Note
      </button>

      {/* Nav. BUTTONS */}
      <div className="nav-section">
        <button className="nav-btn">📄 All Notes</button>
        <button className="nav-btn">⭐ Pinned</button>
        <button className="nav-btn">🗑️ Trash</button>
      </div>

      {/* LABELS */}
      <div className="label-section">
        <h4>Labels</h4>
        <button className="label-btn">💼 Work</button>
        <button className="label-btn">🏠 Personal</button>
        <button className="label-btn">💡 Ideas</button>
      </div>
    </div>
  );
}

export default Sidebar;