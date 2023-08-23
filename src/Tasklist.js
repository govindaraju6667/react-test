import { useState } from "react";

function TaskList({ data, onChangeBook, onDeleteBook }) {
  return (
    <ul>
      {data.map((book) => (
        <li key={book.id}>
          <Task books={book} onChange={onChangeBook} onDelete={onDeleteBook} />
        </li>
      ))}
    </ul>
  );
}

function Task({ books: book, onChange, onDelete }) {
  const [read, setRead] = useState(false);
  let bookContent;
  if (read) {
    bookContent = (
      <>
        <input
          value={book.title}
          onChange={(e) => {
            onChange({
              ...book,
              title: e.target.value,
            });
          }}
        />
      </>
    );
  } else {
    bookContent = <>{book.title}</>;
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={book.done}
        onChange={(e) => {
          onChange({
            ...book,
            done: e.target.checked,
          });
        }}
      />
      {bookContent}
      <button onClick={() => onDelete(book.id)}>Remove</button>
    </label>
  );
}

export default TaskList;
