import React from 'react';
import Tooltip from './Tooltip';
import { Link } from 'react-router-dom';

import './About.css';

const About = () => {
	const scrollPrevious = (val) => {
		switch (val) {
			case 0:
				window.scrollTo(0, 1350);
				break;
			case 1:
				window.scrollTo(0, 2500);
				break;
			case 2:
				window.scrollTo(0, 3650);
				break;
			case 3:
				window.scrollTo(0, 4800);
				break;
			case 4:
				window.scrollTo(0, 5950);
				break;
			case 5:
				window.scrollTo(0, 7100);
				break;
			case 6:
				window.scrollTo(0, 8250);
				break;
			case 7:
				window.scrollTo(0, 9400);
				break;
			case 8:
				window.scrollTo(0, 10550);
				break;
			case 9:
				window.scrollTo(0, 11700);
				break;
			case 10:
				window.scrollTo(0, 12850);
				break;
			case 11:
				window.scrollTo(0, 14000);
				break;
			default:
				break;
		}
	};

	const scrollNext = (val) => {
		switch (val) {
			case 1:
				window.scrollTo(0, 2500);
				break;
			case 2:
				window.scrollTo(0, 3650);
				break;
			case 3:
				window.scrollTo(0, 4800);
				break;
			case 4:
				window.scrollTo(0, 5950);
				break;
			case 5:
				window.scrollTo(0, 7100);
				break;
			case 6:
				window.scrollTo(0, 8250);
				break;
			case 7:
				window.scrollTo(0, 9400);
				break;
			case 8:
				window.scrollTo(0, 11700);
				break;
		    case 9:
				window.scrollTo(0, 12850);
				break;
			case 10:
				window.scrollTo(0, 14000);
				break;
			case 11:
				window.scrollTo(0, 15150);
				break;
			default:
				break;
		}
	};

	return (
		<>
			<div className='section'>
				<div className='top-border'></div>
				<Link style={{ textDecoration: 'none' }} to={'/'}>
					<span className='back'> {'◀'} </span>
				</Link>
				<div className='fixed'>
					<h1 className='large'>About This Website</h1>
					<p className='about-content'>
						The human brain can easily process visuals instead of long codes to
						understand the algorithms. This website allows you to do just that.
						<div style={{ textAlign: 'center' }}>Learn More!</div>
					</p>
					<p className='scroll-message'>⇣ Start Scrolling</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Pathfinding Visualizer</h1>
					<p className='about-content'>
						Pathfinding is the plotting, by a computer application, of the shortest route between two points. It is a more practical variant on solving mazes. This field of research is based heavily on Dijkstra's algorithm for finding the shortest path.
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Sorting Visualizer</h1>
					<p className='about-content'>
					Sorting is a process of ordering or placing a list of elements from a collection in some kind of order. It is nothing but storage of data in sorted order. Sorting can be done in ascending and descending order. It arranges the data in a sequence which makes searching easier.
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Recursive Sorting Visualizer</h1>
					<p className='about-content'>
					Recursive techniques can be utilized in sorting algorithms, allowing for the sorting of n elements in O(nlogn) time (compared with the O(n2) efficiency of bubble sort. Two such algorithms which will be examined here are Mergesort and Quicksort.
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Recursion Tree Visualizer</h1>
					<p className='about-content'>
					Recursion tree method is used to solve recurrence relations. Generally, these recurrence relations follow the divide and conquer approach to solve a problem.
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Searching Visualizer</h1>
					<p className='about-content'>
						Searching Algorithms are designed to check for an element or
						retrieve an element from any data structure where it is stored.
						These type of algorithms are used to find elements from a specific
						data structures.The appropriate search algorithm often depends on
						the data structure being searched
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Binary Search Visualizer</h1>
					<p className='about-content'>
					Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N). 
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>N Queens Visualizer</h1>
					<p className='about-content'>
						The idea is to place queens one by one in different columns,
						starting from the leftmost column. When we place a queen in a
						column, we check for clashes with already placed queens. In the
						current column, if we find a row for which there is no clash, we
						mark this row and column as part of the solution. If we do not find
						such a row due to clashes then we backtrack and return false.
					</p>
				</div>
			</div>
			
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Prime Number Visualizer</h1>
					<p className='about-content'>
					The Sieve is a one-dimensional device for finding prime numbers. The numbers from 2 to n​are written as a single, long sequence. Then the multiples of 2 are crossed out but leaving 2. Then the multiples of 3 are crossed out but leaving 3.
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Convex Hull Visualizer</h1>
					<p className='about-content'>
					The Convex Hull is the subset of points that forms the smallest convex polygon which encloses all points in the set.
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Turing Machine Visualizer</h1>
					<p className='about-content'>
					A Turing machine is a mathematical model of computation that defines an abstract machine that manipulates symbols on a strip of tape according to a table of rules
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Scheduling Visualizer</h1>
					<p className='about-content'>
						Process Scheduling is an OS task that schedules processes of
						different states like ready, waiting, and running. Process
						scheduling allows OS to allocate a time interval of CPU execution
						for each process. Another important reason for using a process
						scheduling system is that it keeps the CPU busy all the time. This
						allows you to get the minimum response time for programs.
					</p>
				</div>
			</div>
			
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Stack Visualizer</h1>
					<p className='about-content'>
						A stack is an abstract data type that serves as
						a collection of elements, with two main principal operations (Push,
						Pop).The order in which elements come off a stack gives rise to its
						alternative name, LIFO (last in, first out). Additionally, a peek
						operation may give access to the top without modifying the stack.
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Queue Visualizer</h1>
					<p className='about-content'>
						A queue is a collection of entities that are
						maintained in a sequence and can be modified by the addition of
						entities at one end of the sequence and the removal of entities from
						the other end of the sequence.
					</p>
				</div>
			</div>
			<div className='section'>
				<div className='fixed'>
					<h1 className='large'>Tree Visualizer</h1>
					<p className='about-content'>
						n computer science, a binary search tree (BST), also called an
						ordered or sorted binary tree, is a rooted binary tree whose
						internal nodes each store a key greater than all the keys in the
						node's left subtree and less than those in its right subtree. A
						binary tree is a type of data structure for storing data such as
						numbers in an organized way.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;