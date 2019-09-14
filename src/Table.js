import React from 'react'
import classnames from 'classnames'

function Table(props) {
    return (
        <div>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อรายการ</th>
                        <th>จำนวนเงิน</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((item,index)=>(
                        <tr ket={index} className={classnames(item.type == 1 ?'table-success':'table-danger')}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.title}</td>
                            <td>{item.amount}</td>
                            <td>
                                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => props.onDelete(item.id)}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
