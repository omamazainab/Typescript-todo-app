import React, {useState} from 'react';
import addImg from './images/add.png'


interface Props {
  addTodo: AddTodo;
}


export const AddTodoForm: React.FC<Props> = ({ addTodo })=> {

  const [text, setText] = useState('');

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <div
      className="add-button"
      
        onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }} >
          <img src={addImg} alt=""/>
        </div>
      
    </form>
  );
};