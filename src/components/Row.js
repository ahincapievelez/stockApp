import { Link } from "react-router-dom";
import { useState } from "react"; 

function Row( { symbol, company, price, change}) {

    //let [changeValue, setChangeValue] = useState(change)
    let [changeStatus, setChangeStatus] = useState(false)

    console.log(change)
    let status = Math.sign(change);
    console.log(status)

    return (
    <tr className="row">
        <td className="link"><Link className="links" to={`/stock/${symbol}`}>{company}</Link></td>
        <td>{price}</td>
        <td 
            className="change" 
            style={{backgroundColor: status === 1 ? "#CFFFDC" : "#FFCAC8", color: status === 1 ? "#3EC70B" : "#FF6464",fontWeight: 700}}>
            {change}
        </td>
    </tr>
    );
  }
  
  export default Row;