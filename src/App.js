import React, {useState} from 'react';
import Header from './Header';
import Form from './TransactionForm';
import Table from './Table';
import uuid from 'uuid';

function App() {

  const [transaction,setTranaction] = useState({
    id : uuid.v4(),
    amount: null,
    title:'',
    type: 1
  });

  const [list,setList]=useState([]);
  
  const onHandleChange = e => {
    setTranaction({
      ...transaction,
      [e.target.name]: e.target.value
    });
  } 

  const onsubmit = e => {
    e.preventDefault();
    setList([...list,transaction])
    setTranaction({
      ...transaction,
      amount: 0,
      title :"",
      id : uuid.v4()
    });
  };
  
  const onDelete = listId =>{
    setList(list.filter(item=>item.id != listId));
  };

  return (
    <div className="App">
        <Header/>
       <div className="container">
        <Form onHandleChange ={onHandleChange} onsubmit={onsubmit}
        Transaction={transaction}/>
        <Table list={list} onDelete={onDelete}/>
       </div>
       
    </div>
  );
}

export default App;
