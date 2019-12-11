import React,{Component} from "react";
import Axios from "axios";
import Product from './product';
class Search extends Component{
    constructor(){
        super()
        this.state={
            change:"",
            products:[]
        }
    
    }
//    FetchInputData= (event)=>{
// console.log(event.target.value)
// this.setState({change:event.target.value})
//     }
handleFormSubmit=async (event)=>{
    event.preventDefault();
    //this.setState({products:this.state.change});
    let item= await Axios.get(`https://pixabay.com/api/?key=14559735-6499828ea31e2645369925bee&q=yellow+${this.state.change}&image_type=photo&pretty=true`);
    this.setState({products:item.data})
}
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <form style={{marginTop:"20px"}} onSubmit={this.handleFormSubmit}>
                               <input type="text" placeholder="search anything"  className="form-control"
                             value={this.state.change}
                             onChange = {(e)=>this.setState({change:e.target.value})} />
                            
                             </form>
                        </div>
                    </div>
                   
                </div>
                <div className="row">
                    <Product pro={this.state.products}/>
                </div>
            </div>
        )
    }
}
export default Search;