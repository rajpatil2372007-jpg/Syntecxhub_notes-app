import { useState, useEffect } from "react";

function AddNoteModal({
  setShowModal,
  notes,
  setNotes,
  editIndex,
  setEditIndex,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const colors = ["#fef9c3", "#dbeafe", "#dcfce7", "#fce7f3", "#ede9fe"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  // load edit data
  useEffect(() => {
    if (editIndex !== null && notes[editIndex]) {
      setTitle(notes[editIndex].title);
      setContent(notes[editIndex].content);
    }
  }, [editIndex, notes]);

  // Reset for new note
  useEffect(() => {
    if (editIndex === null) {
      setTitle("");
      setContent("");
    }
  }, [editIndex]);

const saveNote = () => {
  if (title.trim() === "" && content.trim() === "") return;

  if (editIndex !== null && editIndex !== -1) {
    const updated = [...notes];
    updated[editIndex] = {
      ...updated[editIndex],
      title,
      content,
    };
    setNotes(updated);
    setEditIndex(null);
  } else {
    setNotes([
      ...notes,
      {
        id: Date.now(),
        title,
        content,
        color: getRandomColor(),
        pinned: false,
      },
    ]);
  }

  setShowModal(false);
  setTitle("");
  setContent("");
};

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{editIndex !== null ? "Edit Note" : "New Note"}</h2>

        <input
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="modal-buttons">
          <button
            onClick={() => {
              setShowModal(false);
              setEditIndex(null);
            }}
          >
            Cancel
          </button>

          <button onClick={saveNote}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default AddNoteModal;