/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
import Navigations from "./Navigations";

const Books = () => {
console.log('books here')
const [allBooks, setAllBooks] = useState([])
const [error, setError] = useState(null);
const [showBooks,setShowBooks] = useState(false);

useEffect(() => {
    const getBooks = async () => {
        try {
            const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
            const data = await response.json();
            setAllBooks(data.books)
        } catch(error) {
            setError(error.message);
        }
        // console.log(data.books)
    }
    getBooks();
},[]);

const handleClick = () => {
    console.log("i have been clicked")
    setShowBooks(true);
}
console.log('showBooks:', showBooks);
return (
    <div>
        
      {showBooks && (
        <>
          <h1>Welcome to BookBuddy Library</h1>
          <h3>Explore, Discover, and Dive into the World of Books</h3>
          
        </>
      )}
    </div>
  );
       

}





export default Books;