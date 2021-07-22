import { useState } from "react";



const Slide2 = () =>{


    const [price,setPrice]= useState(0);
    const [sales,setSales]= useState(0);
    const [estimate,setEstimate]= useState(0);
    const [selected,setSelected]= useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleEstimate();
        setSales(0.00);
        setPrice(0.00);
    }


    const handleEstimate = () => {
        let formattedEsimate = parseInt(price)*parseInt(sales);
        setEstimate(formattedEsimate.toFixed(2));
    }


    return(<div className="row">   
                <div className="col">
                    <div className="card card-custom">
                            <h5 className="card-title p-1 card-title-custom">Revenue Forcast</h5>
                            <div className="card-body">
                                <form className="d-flex flex-column justify-content-between form-custom" onSubmit={onSubmit}>
                                    <div className="row g-2 justify-content-between align-items-center">
                                        <div className="col-auto">
                                            <label htmlFor="inputPrice" className="col-form-label">Robobuddy Price</label>
                                        </div>
                                        <div className="col-auto">
                                            <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price} className="form-control input-custom" />
                                        </div>  
                                    </div>

                                    <div className="row g-2 justify-content-between align-items-center">
                                        <div className="col-auto col-custom">
                                            <label htmlFor="inputSales" className="col-form-label">RoboBuddy Estimated Unit Sales</label>
                                        </div>
                                        <div className="col-auto">
                                            <input type="text" value={sales} onChange={(e)=>setSales(e.target.value)} className="form-control input-custom" />
                                        </div>  
                                    </div>

                                    <div className="row g-2 justify-content-between align-items-center">
                                        <div className="col-auto">
                                            <label htmlFor="inputStratagey" className="col-form-label">Strategy</label>
                                        </div>
                                        <div className="col-auto">
                                        <select value={selected} onChange={(e)=>setSelected(e.target.value)} className="custom-select select-custom">
                                            <option value="cost" >Cost</option>
                                            <option value="innovation" >Innovation</option>
                                            <option value="customer">Customer</option>
                                        </select>
                                        </div>  
                                    </div>

                                    <button type="submit"  className="btn btn-primary btn-sm align-self-center btn-custom">Submit</button>

                                </form>
                            </div>      
                    </div>
                </div>
                <div className="col">
                    <div className="card card-custom">
                            <h5 className="card-title p-1 card-title-custom">Sales Estimate</h5>
                            <div className="card-body d-flex flex-column align-items-center justify-content-around">
                                <h6>Sales Estimate</h6>
                                <h1>${estimate}</h1>

                            </div>  
                            
                    </div>
                </div>
            </div>);
}




export default Slide2;