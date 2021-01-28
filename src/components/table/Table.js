import React from 'react';
import './Table.css'

const Table = (props) => {
    const {rows,cols,selectedCell} = props;
    return(
        <div className='table-container'>
            {rows>0 && cols>0 && (
                <table>
                    {Array.from(new Array(rows),(el,rowIndex) =>(
                        <tr>
                        {Array.from(new Array(cols),(el,colIndex)=>(<td className={selectedCell.row=== rowIndex && selectedCell.col=== colIndex ? 'selected': ''}></td>))}
                        </tr>
                    ))

                    }
                </table>
            )}
        </div>
    )
}

export default Table;
