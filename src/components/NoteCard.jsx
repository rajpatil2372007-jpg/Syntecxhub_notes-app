import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";

function NoteCard({
  note,
  deleteNote,
  setShowModal,
  setEditIndex,
  togglePin,
}) {
  return (
    <div
      className="card"
      style={{ background: note.color || "#ffffff" }}
    >
      <h3>{note.title}</h3>
      <p style={{ whiteSpace: "pre-line" }}>
  {note.content}
</p>

      <div className="card-actions">
        <button
  onClick={() => {
    setEditIndex(note.id);
    setShowModal(true);
  }}
>
  <img src={editIcon} alt="edit" className="icon" />
</button>

       {/* PIN  */}
        <button onClick={() => togglePin(note.id)} title="Pin">
          {note.pinned ? "⭐" : "☆"}
        </button>

        {/* DELETE */}
        <button onClick={() => deleteNote(note.id)}>
  <img src={deleteIcon} alt="delete" className="icon" />
</button>
      </div>
    </div>
  );
}

export default NoteCard;