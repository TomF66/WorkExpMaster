import DataItem from "./DataItem";
import DataTable from "./DataTable";
import data from './data.json';
import "./Gallery.css";


function ViewSelect({view}) {
    if (view === "individual") {
        return (
            <>
                
                <DataTable />
            </>

        )
    } else if (view === "gallery") {
        return (
            <div className="grid-container">
                    {data.map((item, index) => (
                    <div key={index} className="grid-item">
                        <img
                        src={`/img/${item.pic}`}
                        alt={`${item.name} - ${item.size}`}
                        />
                        <h4>{item.name} ({item.size})</h4>
                        <p>£{item.price.toFixed(2)}</p>
                    </div>
                    ))}
                </div>
   


    )
    } else if (view === "list") {
        return(
            
            <ul>
        {data.map((item, index) => (
           <li> <DataItem product={item}/></li>
        ))}
        </ul>
        )
    } else return(
        <h1>aaaaa</h1>
    )
}

export default ViewSelect;
