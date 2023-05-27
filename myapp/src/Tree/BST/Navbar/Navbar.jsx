import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = (props) => {
	const insertRef = useRef(null);
	const removeRef = useRef(null);
	const searchRef = useRef(null);
	const randomRef = useRef(null);

	const insert = () => {
		props.insert(insertRef.current.value);
	};

	const remove = () => {
		props.remove(removeRef.current.value);
	};

	const search = () => {
		props.search(searchRef.current.value);
	};

	const random = () => {
		props.random(randomRef.current.value);
	};

	const clear = () => {
		props.random(0);
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<span className="navbar-brand">BST Visualizer</span>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <Link to={"/"}>
                            <span style={{color:"white"}}>
                                Home
                            </span>
                    </Link>
                </div>
			<div id='mainBST'>
				<div className='item'>
					<input
						className='bst-input'
						placeholder='Insert'
						ref={insertRef}
						type='number'
						onKeyUp={(e) => {
							if (e.keyCode === 13) insert();
						}}
					/>
					<button onClick={insert} className='insert btn btn-outline-success'>
						Insert
					</button>
				</div>
				<div className='item'>
					<input
						placeholder='Search'
						type='number'
						ref={searchRef}
						onKeyUp={(e) => {
							if (e.keyCode === 13) search();
						}}
						className={`bst-input ${props.seaError}`}
					/>
					<button onClick={search} className='btn btn-outline-primary'>
						Search
					</button>
				</div>
				<div className='item'>
					<input
						placeholder='Delete'
						ref={removeRef}
						type='number'
						onKeyUp={(e) => {
							if (e.keyCode === 13) remove();
						}}
						className={`bst-input ${props.delError}`}
					/>
					<button onClick={remove} className='delete btn btn-outline-danger'>
						Delete
					</button>
				</div>
				<div className='item'>
					<input
						className="bst-input"
						placeholder='Node count'
						type='number'
						ref={randomRef}
						onKeyUp={(e) => {
							if (e.keyCode === 13) random();
						}}
					/>
					<button onClick={random} className='btn btn-outline-warning'>
						Random
					</button>
				</div>
				<div className='item'>
					<button onClick={clear} className='btn btn-outline-secondary'>
						Clear
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;