import React, { Component } from 'react';

import Number from './Number';
import Navbar from './Navbar/Navbar';
import TextField from '@material-ui/core/TextField';
import Slider from './ControlPannel/Slider';
import Menu from './Menu';

// Algorithms
import linearSearch from './algorithms/linearSearch';
import binarySearch from './algorithms/binarySearch';

import './Searching.css';
import { isInteger } from 'lodash';
import Instruct from '../Instructions/Instruct';
import instruct_gif from '../assets/searching.gif';

class Searching extends Component {
	state = {
		array: [],
		steps: [],
		color: [],
		colorSteps: [],
		delay: 500,
		count: 10,
		currentStep: 0,
		found: false,
		key: 0,
		range: [0, 100],
		algorithm: 0,
		isVisualizing: false,
		showModal:true,
	};

	ALGORITHMS = [linearSearch, binarySearch];

	showModal = () => {
        this.setState({ 
                showModal: true
            });
      };
    
    hideModal = () => {
    this.setState({ showModal: false });
    };

	componentDidMount() {
		this.generateArray();
	}

	generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	clearColorKey = () => {
		let blankKey = new Array(this.state.count).fill(0);
		this.setState({ color: blankKey, colorSteps: [blankKey] });
	};

	changeAlgorithm = async (e) => {
		await this.setState({
			algorithm: parseInt(e.target.value),
			array: this.state.array,
			steps: [this.state.array],
		});

		this.generateSteps();
	};

	generateArray = () => {
		let arr = [];
		for (let i = 0; i < this.state.count; i++) {
			arr.push(
				this.generateRandomNumber(this.state.range[0], this.state.range[1])
			);
		}
		arr.sort((a, b) => a - b);
		this.setState(
			{
				array: arr,
				steps: [arr],
				count: this.state.count,
				currentStep: 0,
			},
			() => {
				this.generateSteps();
			}
		);
	};

	generateSteps = async () => {
		await this.clearColorKey();
		let k = this.state.key;
		let array = this.state.array.slice();
		let steps = this.state.steps.slice();
		let colorSteps = this.state.colorSteps.slice();


		if (isInteger(k)) {
			this.ALGORITHMS[this.state.algorithm](
				array,
				steps,
				k,
				colorSteps,
			);
		}

		console.log(steps, colorSteps);

		this.setState({
			steps: steps,
			colorSteps: colorSteps,
		});
	};

	setArray = (val, index) => {
		let arr = this.state.array;
		arr[index] = val;
		arr.sort((a, b) => a - b);
		console.log(index);
		this.setState({
			array: arr,
			steps: [arr],
			count: this.state.count,
			currentStep: 0,
		});
	};

	startSearch = async () => {
		let steps = this.state.steps.slice();
		let color = this.state.colorSteps.slice();

		for (let i = 0; i < steps.length; i++) {
			let currentStep = this.state.currentStep;
			this.setState({
				array: steps[i],
				color: color[i],
				currentStep: currentStep + 1,
			});
			await sleep(this.state.delay);
		}
	};

	reset = async () => {
		this.clearColorKey();
		let arr = this.state.array;
		await this.setState(
			{
				array: arr,
				steps: [arr],
			},
			() => this.generateSteps()
		);
	};

	setCount = async (count) => {
		await this.setState({ count }, () => this.generateArray());
	};

	setSpeed = async (speed) => {
		await this.setState({ speed }, () => this.generateArray());
	};

	setKey = async (e) => {
		this.clearColorKey();
		let key = e.target.value;
		let arr = this.state.array;
		if (isInteger(parseInt(key))) {
			key = parseInt(key);
		} else {
			key = null;
		}
		await this.setState({ key, array: arr, steps: [arr] }, () => {
			this.generateSteps();
		});
	};

	setFound = () => {
		this.setState({ found: true });
	};

	render() {
		return (
			<div className="searching">
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
				<Navbar
					startSearch={this.startSearch}
					reset={this.reset}
					randomize={this.generateArray}
					changeAlgorithm={this.changeAlgorithm}
				/>
				<div className='frame' align='center'>
					<TextField
						id='standard-basic'
						className='my-5'
						label='KEY'
						onChange={this.setKey}
						color='primary'
					/>
					<div className='numbers-container'>
						{this.state.array.map((value, index) => (
							<Number
								value={value}
								index={index}
								setArray={this.setArray}
								color={this.state.color[index]}
								key={index}
							/>
						))}
					</div>
					<div className='control-pannel mt-5'>
						<Slider type='Count' handleChange={this.setCount} />
						<Slider type="Speed" handleChange={this.setSpeed} />
					</div>
				</div>
			</div>
		);
	}
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default Searching;