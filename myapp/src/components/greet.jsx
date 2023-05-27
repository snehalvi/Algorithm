import React, {Component} from 'react';
import "./style.css"
class Greet extends Component {
    render() {
        return (
            <div className="greet">
                <h1 className="display-2"><b>
                    Algorithm Visualizer</b>
                </h1>
                <hr className="dropdown-divider"/>
                <h4 className="display">
                    Visualize algorithms for a better understanding
                </h4>
                <hr className='dropdown-divider'/>
                <h3 className="arg">
                    Interact..Visualize..Learn...
                </h3>
            </div>
        );
    }
}

export default Greet;