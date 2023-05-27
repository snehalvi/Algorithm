import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import './style.css'
class TypeWriterC extends Component {
    state = {

    }
    render() {
        return (
            <div className="type display-3">
                <span className="badge badge-dark">
                <Typewriter
                    options={{
                        strings: ['Pathfinding Algorithms', 'Sorting Algorithms', 'Graphs','N-Queen', 'Prime Number', 'Searching Algorithms', 'Convex Hull', 'Turing Machine', 'Stack', 'Queue'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            </div>
        );
    }
}

export default TypeWriterC;