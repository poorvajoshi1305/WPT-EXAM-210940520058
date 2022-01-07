import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <MyChatApp/>
    </div>
  );
}

function MyChatApp(){
  const [inputMsg, setInputMsg]= useState("");
  const [list,setList]=useState([]);
  const [validate, setValid]= useState(false);

  const onchangeMessage=(e)=>{
    const newInputMsg= e.target.value;
    setInputMsg(newInputMsg);
  }

  const sendMessage=()=>{
    if(inputMsg==""){
      alert("invalid message!")
      setValid(true);
      return;
   }
    const data = {
      inputMsg : inputMsg,
    };
    let newList = [...list,data];
    setList(newList);
    setInputMsg("");
    setValid(false);
  }

  return (
    <div className='container mt-3 mb-2'>
      <div className='d-flex align-text-bottom bg-dark h-50 text-light'>
        <h1>MyChatApp <span className='fs-4'>Poorva Joshi 210940520058</span></h1>
      </div>
      <div className='d-flex mt-5 justify-content-around'>

      <input 
      className={
        inputMsg=="" && validate
        ? "form-control border border-danger" 
        : "form-control border border-dark"
      }
      type="text"
       value={inputMsg} 
      placeholder="Lets chat here..."
      onChange={onchangeMessage}
      />
      <input className='btn btn-dark mb-3' type="button" value="Send"  onClick={sendMessage}/>
      </div>

    {list.map((item,index)=>(
     <div key={index}
     className={
       index % 2 == 0
       ? 'd-flex alert alert-info d-flex justify-content-start mt-3'
       : 'd-flex alert alert-secondary d-flex d-flex justify-content-end mt-3'
     }
     >
          {item.inputMsg}
     </div>
    ))}
    </div>
  );
}
 
