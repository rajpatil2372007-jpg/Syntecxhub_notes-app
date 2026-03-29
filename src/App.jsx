import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import AddNoteModal from "./components/AddNoteModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  // Load old data
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    if (!saved) return [];

    const parsed = JSON.parse(saved);

    return parsed.map((note) => ({
      ...note,
      pinned: note.pinned ?? false,
    }));
  });

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  //     Save notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //Delete
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  //Pin notes 
  const togglePin = (id) => {
    const updated = notes.map((note) =>
      note.id === id
        ? { ...note, pinned: !note.pinned }
        : note
    );
    setNotes(updated);
  };

  //Search 
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );
  const pinnedNotes = filteredNotes.filter((note) => note.pinned);
  const unpinnedNotes = filteredNotes.filter((note) => !note.pinned);

  return (
    <div className="app">
      <Sidebar setShowModal={setShowModal} />

      <div className="main">
        <Header search={search} setSearch={setSearch} />

        <div className="notes-grid">
          {[...pinnedNotes, ...unpinnedNotes].map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              setShowModal={setShowModal}
              setEditIndex={(id) => setEditId(id)}
              togglePin={togglePin}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <AddNoteModal
          setShowModal={setShowModal}
          notes={notes}
          setNotes={setNotes}
          editIndex={notes.findIndex((n) => n.id === editId)}
          setEditIndex={() => setEditId(null)}
        />
      )}

      <button className="fab" onClick={() => setShowModal(true)}>
        +
      </button>
    </div>
  );
}

export default App;