import React from 'react';
import './dataItem.css';

function DataItem({product}) {

      function toSentanceCase(txt)
  {
    if (txt.length > 1)
    {
         return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
    }

    return txt;
  }

  return (
    
     <div>
        {product ?
        <table>
          <tr>
            <th>
              <img className={"prodimg"} src={`../img/${product.pic}`} alt="product pic" />
            </th>
            <th>
              <p>Name: {toSentanceCase(product.name)}</p>
              <p>Size: {toSentanceCase(product.size)}</p>
              <p>Department: {toSentanceCase(product.department)}</p>
            </th>
            <th> 
              <p>Price: £{product.price.toFixed(2)}</p>
            </th>
          </tr>
        </table>
                 : <span>Error product was null</span> }
     </div>  
             
     );
}

export default DataItem; 
 
