import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import './bookcreate.css'
const BookCreate = ({onCreate}) => {
  const [title, setTitle] = useState("");
  const [desc, setDes] = useState("");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reps = await onCreate
    ({ title,
        desc,
      })

  };
  
  return (
    <div className="form-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input onChange={handleChangeTitle} type="text" id="title" name="title" />
        <input onChange={handleChangeDes} type="text" id="desc" name="desc" />
        <input type="submit" value="Create!" />
      </form>
    </div>
  );
};

export default BookCreate;
