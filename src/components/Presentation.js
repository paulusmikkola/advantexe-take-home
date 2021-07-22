import { useState } from "react";
import Slide1 from './Slides/Slide1';
import Slide2 from "./Slides/Slide2";
import Slide3 from './Slides/Slide3';
import Slide4 from './Slides/Slide4';



const  Slides = [<Slide1/>,<Slide2/>,<Slide3/>,<Slide4/>];
const Headers = ['Welcome to RoboBuddy Simulation','Revenue Forcast','Sales History','Income Statement'];


const Presentation = () =>{

    
    const [currentSlide,setCurrentSlide] = useState(0);


    

    return (<div className="float-end slide-custom">
                <div className="m-auto slide-header-custom">
                    <h4 className="mt-2">{Headers[currentSlide]}</h4>                
                    <hr className="m-1 hr-custom"/>
                </div>
                <div className=" m-auto mt-5 slide-body-custom">
                    {Slides[currentSlide]}
                    <div className={`m-5 button-navagation-custom ${currentSlide > 0 ? 'float-end': ''}`}>
                        
                        <button 
                            className={`btn btn-success btn-sm btn-custom m-1 ${currentSlide > 0 && currentSlide < 3 ? '' : 'd-none'}` } 
                            onClick={()=>setCurrentSlide(currentSlide-1)} 
                            type="button"
                        >
                            Previous
                        </button>
                        
                        <button 
                            className={`btn btn-primary btn-sm btn-custom m-1 ${currentSlide < 3 ? '' : 'd-none'}` } 
                            onClick={()=>setCurrentSlide(currentSlide+1)} 
                            type="button"
                        >
                            Next
                        </button>

                        <button 
                            className={`btn btn-primary btn-sm btn-custom m-1  ${currentSlide === 3 ? '' : 'd-none'}` }   
                            onClick={()=>setCurrentSlide(0)} 
                            type="button"
                        >
                            Return
                        </button>

                    </div>
                </div>


            </div>);
}



export default Presentation;
