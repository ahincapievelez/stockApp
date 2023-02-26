import { useParams } from "react-router-dom";

function Stock( {stocks}) {

    let { symbol } = useParams()
    let index = stocks.findIndex((indx) => indx.symbol === symbol);
    let getStock = stocks[index]

    return (
        <div>
            <h1>{getStock.name}</h1>
            <table className="stock-table">
                <tr>
                    <td className="td-stock-table title">Symbol</td>
                    <td className="td-stock-table">{getStock.symbol}</td>
                </tr>
                <tr>
                    <td className="td-stock-table title">Price</td>
                    <td className="td-stock-table">${getStock.lastPrice}</td>
                </tr>
                <tr>
                    <td className="td-stock-table title">Change</td>
                    <td className="td-stock-table">{getStock.change}</td>
                </tr>
                <tr>
                    <td className="td-stock-table title">High</td>
                    <td className="td-stock-table">{getStock.high}</td>
                </tr>
                <tr>
                    <td className="td-stock-table title">Low</td>
                    <td className="td-stock-table">{getStock.low}</td>
                </tr>
                <tr>
                    <td className="td-stock-table title">Open</td>
                    <td className="td-stock-table">{getStock.open}</td>
                </tr>
            </table>
        </div>
    );
  }
  
  export default Stock;