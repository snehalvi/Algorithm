import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Menu from './Menu';
import './styles/stack.css';
import Instruct from '../Instructions/Instruct';
import instruct_gif from '../assets/stack.gif';

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

class Stack extends Component {
	state = {
		stack: [],
		showModal:true,
	};

	showModal = () => {
        this.setState({ 
                showModal: true
            });
      };
    
    hideModal = () => {
    this.setState({ showModal: false });
    };

	push = (value) => {
		let temp = this.state.stack;
		temp.indexOf(value) === -1
			? temp.splice(0, 0, value)
			: console.log('already exists');
		this.setState({
			stack: temp,
		});
	};

	pop = () => {
		let temp = this.state.stack;
		temp.shift();
		this.setState({
			stack: temp,
		});
	};

	popAll = async () => {
		let temp = this.state.stack;
		while (temp.length > 0) {
			temp = this.state.stack;
			temp.shift()
			this.setState(
				{
					stack: temp,
				},
				await sleep(500)
			);
		}
	};

	render() {
		return (
			<>
			<Instruct show={this.state.showModal}>
                    <h3 style={{textAlign: 'center'}}>How to use?</h3>
                <img className="card-img-top img-thumbnail" style={{marginBottom:"5px", width: '100%', height: '80%'}} src={instruct_gif} alt="Card image cap"/>
                <div class="container">
  <div class="center">
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.hideModal} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>Close</button>
  </div>
</div>
</Instruct>
            <Menu/>
				<Navbar push={this.push} pop={this.pop} popAll={this.popAll} />
				<div className='container mt-5'>
					<ul className='stack'>
						{this.state.stack.length > 0 ? (
							this.state.stack.map((item, index) =>
								index === 0 ? (
									<li className='element top' key={index}>
										{item} <div className='arrow'>↵</div>
									</li>
								) : (
									<li className='element' key={index}>
										{item}{' '}
									</li>
								)
							)
						) : (
							<div className='empty'>Empty Stack</div>
						)}
					</ul>
				</div>
			</>
		);
	}
}

export default Stack;