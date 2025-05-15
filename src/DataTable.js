import React, { useState } from 'react';
import DataItem from './DataItem';
import './DataTable.css'
import data from './data.json';

function DataTable() {

  const [itemNo, setItemNo] = useState(0);


  function nextPage()
  {
    if (itemNo + 1 < data.length)
    {
      setItemNo(itemNo+1);
    }
  }

  function previousPage()
  {
    if (itemNo  >0 )
    {
      setItemNo(itemNo-1);
    }
  }
  
  function firstPage()
  {
 
    
      setItemNo(0);
    
  }

   function lastPage()
  {
    
      setItemNo(data.length -1 );
  
  }

  return (<div>
            <DataItem product={data[itemNo]} />
            <button onClick={() => firstPage()}>first</button> 
            <button onClick={() => previousPage()}>previous</button>
            <button onClick={() => nextPage()}>Next</button> 
            <button onClick={() => lastPage()}>last</button>
  
          </div>);
}

export default DataTable; 
  