import React from 'react'

function TransactionForm(props) {
    return (
        <div>
            <form onSubmit={e=>props.onsubmit(e)}>
                <br></br>
                <input type ="text" 
                    name ="title" 
                    className ="form-control " 
                    value={props.Transaction.title}
                    onChange = {e => props.onHandleChange(e)}
                    ></input>
                <input type ="number" 
                    name ="amount" 
                    placeholder="0"
                    className ="form-control" 
                    value={props.Transaction.amount}
                    onChange = {e => props.onHandleChange(e)}
                    ></input>
                <select name ="type" className ="form-control" onChange = {e => props.onHandleChange(e)}>
                    <option value ="1">รายรับ</option>
                    <option value = "2">รายจ่าย</option>
                </select><br></br>
               <center><button type ="submit" class="btn btn-outline-success mt-2">บันทึก</button></center> 
            </form>
        </div>
    )
}

export default TransactionForm
