/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
import Navigations from "./Navigations";

const Books = () => {
const [allBooks, setAllBooks] = useState([])
const [error, setError] = useState(null);
const [showBooks,setShowBooks] = useState(false);

useEffect(() => {
    const getBooks = async () => {
        try {
            const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
            const data = await response.json();
            setAllBooks(data.books)
            console.log(data.books)
        } catch(error) {
            setError(error.message);
        }
      }
      getBooks();
    },[]);
    
const handleClick = () => {
  setShowBooks(true);
}


return (
    <div>
        <Navigations onLinkClick={handleClick} />
      {showBooks && (
        <>
          <h1>Welcome to BookBuddy Library</h1>
          <h3>Explore, Discover, and Dive into the World of Books</h3>
          <ul className="book-list">
            {allBooks.map((book) => {
              return (
              <li key={book.id} className="book-card">
                <img src={book.coverimage} alt={book.title} className="book-cover" />
                <h4>{book.title}</h4>
                <p>Author : {book.author}</p>
                <button>See Details</button>
              </li>)
            })}
          </ul>
        </>
      )}
    </div>
  );   
}



export default Books;




