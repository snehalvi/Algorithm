import React, {Component} from 'react';
import EntryPoint from "./entryPoint";
import Search from "./search";
import Navbar from "./navbar";
import Instruct from '../Instructions/Instruct';
import instruct_gif from '../assets/binary.gif';

class BinarySearch extends Component {
    state={
        upper:100,
        lower:0,
        max:100,
        isRunning:false,
        showModal:true,
    }

    showModal = () => {
        this.setState({ 
                showModal: true
            });
      };
    
    hideModal = () => {
    this.setState({ showModal: false });
    };
    render() {
        return (
            <div>
                <Instruct show={this.state.showModal}>
                    <h3 style={{textAlign: 'center'}}>How to use?</h3>
                <img className="card-img-top img-thumbnail" style={{marginBottom:"5px", width: '100%', height: '80%'}} src={instruct_gif} alt="Card image cap"/>
                <div class="container">
  <div class="center">
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.hideModal} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>Close</button>
  </div>
</div>
</Instruct>
            
                <Navbar/>
                <br />
                <br />
                <br />
            <center>
                {!this.state.isRunning &&
                <EntryPoint
                    startGame={this.handleStartGame}
                    upper={this.state.upper}
                    setUpper={this.handleSetUpper}
                /> }
                {this.state.isRunning &&
                <Search
                    yesButton={this.handleYes}
                    noButton={this.handleNo}
                    upper={this.state.upper}
                    lower={this.state.lower}
                    max={this.state.max}
                    onRestart={this.handleRestart}
                />
                }
            </center>
            </div>
        );
    }
    handleStartGame = () =>{
        this.setState({isRunning:true});
    }
    handleRestart = () =>{
        this.setState({isRunning:false,upper:100,lower:0});
    }
    handleYes = () =>{
        const mid = Math.floor( (this.state.upper+this.state.lower)/2);
        this.setState({lower:mid+1});
    }
    handleNo = () =>{
        const mid = Math.floor( (this.state.upper+this.state.lower)/2);
        this.setState({upper:mid});
    }
    handleSetUpper = (up) =>{
        let val = parseInt(up);
        if( val<=0 ){
            val = 100;
        }
        this.setState({upper:val,max:val});
    }
}

export default BinarySearch;