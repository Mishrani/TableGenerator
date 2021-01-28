import React from 'react';
import './Navigator.css';

const Navigator = (props) => {
    const {rows,cols,selectedCell,setSelectedCell} = props;
return (
    <div class='navg-container'>
        <div>
            <button className='up'onClick={()=>{
                if(selectedCell.row !== null && selectedCell.row>0){
                    setSelectedCell({row:selectedCell.row-1,col:selectedCell.col})
                }
            }}>Up</button>
        </div>
        <div className='middle-row'>
          <span> <button className='left'onClick={()=>{
                if(selectedCell.col !== null && selectedCell.col>0){
                    setSelectedCell({row:selectedCell.row,col:selectedCell.col-1})
                }
            }}>left</button> </span>
          <span> <button className='right'onClick={()=>{
                if(selectedCell.col !== null && selectedCell.col<cols-1){
                    setSelectedCell({row:selectedCell.row,col:selectedCell.col+1})
                }
            }}>right</button> </span>
        </div>
        <div>
            <button className='down' onClick={()=>{
                if(selectedCell.row !== null && selectedCell.row<rows-1){
                    setSelectedCell({row:selectedCell.row+1,col:selectedCell.col})
                }
            }}>Down</button>
        </div>
    </div>
)

}

export default Navigator;