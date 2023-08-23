import { useState } from "react";
import TaskList from "./Tasklist.js";
import AddBook from "./AddBook.js";

export default function TaskApp() {
  const [books, setBooks] = useState([]);

  function handleBook(title) {
    setBooks([
      ...books,
      {
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeBook(nextBook) {
    setBooks(
      books.map((t) => {
        if (t.id === nextBook.id) {
          return nextBook;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteBook(bookId) {
    setBooks(books.filter((t) => t.id !== bookId));
  }

  return (
    <>
      <AddBook onAddBook={handleBook} />
      <TaskList
        data={books}
        onChangeBook={handleChangeBook}
        onDeleteBook={handleDeleteBook}
      />
    </>
  );
}
