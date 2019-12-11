import React,{Component} from 'react';
import Search from './component/search'; 
import './app.css';
class App extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Search/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App; 
