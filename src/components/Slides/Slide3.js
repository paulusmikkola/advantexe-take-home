import { useState } from "react";
import Chart from "react-google-charts";





const Slide3 = ()=>{


    const [sales2020,setSales2020] = useState('');
    const [sales2021,setSales2021] = useState('');
    const [sales2022,setSales2022] = useState('');

    const [graphSales2020,setGraphSales2020] = useState(0);
    const [graphSales2021,setGraphSales2021] = useState(0);
    const [graphSales2022,setGraphSales2022] = useState(0);
    
    const onSubmit =(e) =>{
        e.preventDefault();
        setGraphSales2020(parseInt(sales2020));
        setGraphSales2021(parseInt(sales2021));
        setGraphSales2022(parseInt(sales2022));
        setSales2020(0);
        setSales2021(0);
        setSales2022(0);
    }
    return (<div className="row overflow-none">   
    <div className="col">
        <div className="card card-custom">
                <h5 className="card-title p-1 card-title-custom">Sales History</h5>
                    <div className="card-body">
                        <form className="d-flex flex-column justify-content-between form-custom" onSubmit={onSubmit}>
                            <div className="row g-2 justify-content-between align-items-center">
                                <div className="col-auto">
                                    <label htmlFor="2020Sales" className="col-form-label">2020 Sales</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" onChange={(e)=>setSales2020(e.target.value)} value={sales2020}  className="form-control input-custom" />
                                </div>  
                            </div>

                            <div className="row g-2 justify-content-between align-items-center">
                                <div className="col-auto col-custom">
                                    <label htmlFor="2021Sales" className="col-form-label">2021 Sales</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" onChange={(e)=>setSales2021(e.target.value)} value={sales2021}  className="form-control input-custom" />
                                </div>  
                            </div>

                            <div className="row g-2 justify-content-between align-items-center">
                                <div className="col-auto col-custom">
                                    <label htmlFor="2022Sales" className="col-form-label">2022 Sales</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" onChange={(e)=>setSales2022(e.target.value)} value={sales2022}  className="form-control input-custom" />
                                </div>  
                            </div>

                            <button type="submit"  className="btn btn-primary btn-sm align-self-center btn-custom">Graph</button>

                        </form>
                    </div>
        </div>
    </div>
    <div className="col">
        <div className="card card-custom">
                <h5 className="card-title p-1 card-title-custom">Sales Trend</h5>
                <Chart
                    style={{width:'95%',height:'100%'}}
                    width={'200px'}
                    height={'200px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                        'Year',
                        'Sales',
                        { role: 'style' },
                        {
                            sourceColumn: 0,
                            role: 'annotation',
                            type: 'string',
                            calc: 'stringify',
                        },
                        ],
                        ['2020', graphSales2020, 'blue', null],
                        ['2021', graphSales2021, 'orange', null],
                        ['2022', graphSales2022, 'lightgrey', null],
                    ]}
                    options={{
                        bar: { groupWidth: '85%' },
                        legend: { position: 'none' },
                        bars: 'vertical',
                        vAxis: {
                            title: 'Sales',
                          },

                    }}
                    
                />
        </div>
    </div>
</div>);
}




export default Slide3;

