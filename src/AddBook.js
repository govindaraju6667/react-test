import { useState } from "react";

function AddBook({ onAddBook }) {
  const [title, setTitle] = useState("");
  return (
    <div id="data">
      <h2>Book Libary</h2>
      <input
        placeholder="Add Book Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddBook(title);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddBook;
