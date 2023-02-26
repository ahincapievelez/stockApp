import Row from "../components/Row";

function Dashboard( {stocks}) {

    let stocksComponent = stocks.map((stock) => {
        return <Row symbol={stock.symbol} company={stock.name} price={stock.lastPrice} change={stock.change}/>
    });

    return (
      <div className="dasboard">
        <h1>Most Active Stocks</h1>
        <table className="table">
            <tr className="row-header">
                <th>Company Name</th>
                <th>Price</th>
                <th>Change</th>
            </tr>
            {stocksComponent}
        </table>
      </div>
    );
  }
  
  export default Dashboard;