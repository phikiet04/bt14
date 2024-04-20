import React, { useState } from 'react'
import BookEdit from './BookEdit';
const BookShow = ({book, onDelete, onEdit} ) => {
  const image = `https://picsum.photos/seed/${book.id}/200/300`;
  const [isEdit,setIsEdit] = useState(false);

  const handleEdit =(id,term) =>{
    onEdit(id, term);
    setIsEdit(false);
  };
  return (
    <div className='item'>
      <div className='image'>
        <img src={image} alt="" />
      </div>    
      {!isEdit && (
        <div className="content">
          <div className="title">{book.title}</div>
          <div className="description">{book.desc}</div>
        </div>
      )}
      {isEdit && <BookEdit book={book} onEdit={handleEdit} />}
      {!isEdit && (
        <div className="buttons">
          <button onClick={() => onDelete(book.id)}>Xoá</button>
          <button onClick={() => setIsEdit(!isEdit)}>Sửa</button>
        </div>
      )}
    </div>
  );
}

export default BookShow