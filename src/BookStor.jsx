 import Book from "./Book"
 export default function BookStor({books}){
    return (
        <div>
            <h1>Books length is: {books.length} </h1>
            {
            books.map(book =><Book book={book}></Book>)
            }
        </div>
    )
 }