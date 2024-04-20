import BookShow from './BookShow'
import './booklist.css'
const BookList = ({books,onDeleteBook,onEdit}) => {
  return (
    <div className='book-list'>
        {books.map((book) => (
        <BookShow key={book.id} book={book} onDelete={onDeleteBook} onEdit= {onEdit} /> // Thêm key vào đây
      ))}
    </div>
  );
}

export default BookList