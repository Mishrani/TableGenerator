import { useEffect, useState } from 'react';
import './App.css';
import Generator from './components/generator/Generator';
import Navigator from './components/navigator/Navigator';
import Table from './components/table/Table';

function App() {
  const [rows,setRows] = useState(0);
  const [cols,setCols] = useState(0);
  const [selectedCell,setSelectedCell] = useState({row:null,col: null})
  useEffect(()=>{setSelectedCell({row:0,col:0})},[rows,cols])
  return (
    <div className="App abcd">
      <Generator setAppRow={setRows} setAppCol={setCols}/>
      <Navigator rows={rows} cols={cols} selectedCell={selectedCell} setSelectedCell={setSelectedCell}/>
      {(rows!==0)&&<Table rows={rows} cols={cols} selectedCell={selectedCell}/>}
    </div>
  );
}

export default App;
