import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Menu from './Menu';
import './styles/queue.css';
import Instruct from '../Instructions/Instruct';
import instruct_gif from '../assets/queue.gif';

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

class Queue extends Component {
	state = {
		queue: [],
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

	enqueue = (value) => {
		let temp = this.state.queue;
		temp.indexOf(value) === -1
			? temp.push(value)
			: console.log('already exists');
		console.log(temp);
		this.setState({
			queue: temp,
		});
	};

	dequeue = () => {
		let temp = this.state.queue;
		temp.shift();
		this.setState({
			queue: temp,
		});
	};

	dequeueAll = async () => {
		let temp = this.state.queue;
		while (temp.length > 0) {
			temp = this.state.queue;
			temp.shift()
			this.setState(
				{
					queue: temp,
				},
				await sleep(500)
			);
		}
	}

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
				<Navbar enqueue={this.enqueue} dequeue={this.dequeue} dequeueAll={this.dequeueAll} />
				<div className='container mt-5'>
					<ul className='queue'>
						{this.state.queue.length > 0 ? (
							this.state.queue.map((item, index) => (
								<li className='element' key={index}>
									{item}{' '}
								</li>
							))
						) : (
							<div className='empty'>Empty Queue</div>
						)}
					</ul>
				</div>
			</>
		);
	}
}

export default Queue;