import BookCreate from "./components/BookCreate"
import { createBook, updateBook,deleteBook,fetchBooks } from "./api"
import BookList from "./components/BookList"
import { useState,useEffect } from "react"
import axios from "axios"
import './App.css'
export const App = () => {
  const [books,setBooks] = useState([]);

  const handleCreate = async(term) => {
    const book = await createBook(term);
    if(book) setBooks([...books,book]);
  };
  const handleDelete = async(id) =>{
    const book = await deleteBook(id);
    setBooks(books.filter((item) =>
      item.id !== book.id
    ));   
  }
  const handleUpdate = async(id, term)=>{
    const book = await updateBook(id,term);
    setBooks(
      books.map((item) => item.id === book.id? book: item)
      );
    };  


  useEffect(async() =>{
    const tams = await fetchBooks();
    setBooks(tams);
  },[]);
  return (
    <div className="wrapper">
        <h1>Reading Book</h1>
        <div>
          <BookList books={books} onDeleteBook={handleDelete} onEdit={handleUpdate}/>
        </div>
        <BookCreate onCreate={handleCreate}/>

    </div>
  )
}
