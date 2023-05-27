import SimpleSelect from './SimpleSelect';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ startSearch, changeAlgorithm, reset, randomize }) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark'>
			<button className='btn btn-warning m-2' onClick={randomize}>
				Randomize
			</button>
			<button className='btn btn-primary m-2' onClick={reset}>
				Reset
			</button>
			<SimpleSelect changeAlgorithm={changeAlgorithm} />
			<button className='btn btn-success m-2' onClick={startSearch}>
				Visualize
			</button>
			
		</nav>
	);
};

export default Navbar;