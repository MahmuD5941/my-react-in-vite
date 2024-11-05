import './Book.css'
export default function({book}){
     
    return (
        <div className='book'>
            <h1>Book name: {book.Name} </h1>
            <h1>Price: {book.Price} </h1>
        </div>
    )
}