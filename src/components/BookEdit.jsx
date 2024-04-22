import { useState } from "react"

const BookEdit = ({book, onEdit}) => {
  const [title, setTitle] = useState(book.title);
  const [desc, setDes] = useState(book.desc);
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    onEdit(book.id,{
      title,
      desc,
    });

  }
  const handleCancel =(e)=>{
    setTitle(book.title)
    setDes(book.desc)
  }
  return (
    <div className="edit-form">
      <h3>Edit a book</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChangeTitle}
            type="text"
            id="title"
            name="title"
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            onChange={handleChangeDes}
            type="text"
            id="desc"
            name="desc"
            value={desc}
          />
        </div>
        <div className="form-group d-flex">
          <input className="w-45"  type="submit" value="Save" />
          <button className="w-45"onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default BookEdit