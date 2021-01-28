import React,{useState} from 'react';
import './Generator.css'

const Generator = (props) => {
    const [row, setRow] = useState('');
    const [cols, setCols] = useState('');
    const {setAppRow,setAppCol} = props;
    return (
            <form className='form-gen' autocomplete= 'off' onSubmit={e=>e.preventDefault()}>
                <div className='field'>
                    <lable>Rows</lable>
                    <input type='number' id= 'rows' value={row} onChange={e=>{setRow(e.target.value)}}></input>
                </div>
                <div className='field'>
                    <lable>Columns</lable>
                    <input type='number' id= 'columns'value={cols} onChange={e=>{setCols(e.target.value)}}></input>
                </div>
                <button className='gen-button' onClick={() =>{
                    setAppRow(parseInt(row));
                    setAppCol(parseInt(cols))}
                    }>Generate</button>
            </form>
    )
}

export default Generator;