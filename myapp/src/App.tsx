import React from 'react';
import './App.css';
import Home from './components/Home';
import {HashRouter as Router, Routes, Route, } from 'react-router-dom';
//import {Link} from "react-router-dom"; 
import Pathfinder from './pathfindingComponents/pathfinder';
import Sorting from './Sorting/sorting';
import RecursiveSort from './recursiveSortComponents/recursiveSort';
import Graph from './Graph/graph';
import BinarySearch from './binarySearchComponent/binarySearch';
//import algosort from './algoSort/algoSort';
import Queen from './queenComponents/queen';
import Searching from './Searching/Searching';
import Seive from './primeComponents/seive';
import ConvexHull from './convexHullComponents/convesHull';
import TuringMachine from './Turing Machine/turingMachine';
//import Puzzle from './15puzzleComponents/puzzle';
import Scheduling from './Scheduling/Scheduling';
import Queue from './Queue/Queue';
import Stack from './Stack/Stack';
import BST from './Tree/BST/BST';
import About from './About/About';
//import Layout from './LinkedList/Layout';
import GraphTraversal from './GraphTraversal/GraphTraversal';

//import Navbar from './components/Navbar';
//import Home from './components/Pages';
//import About from './components/About';
//import Blogs from './components/Pages/blogs';
//import SignUp from './components/Pages/signup';
//import Contact from './components/Pages/contact';
  
function App() {
        return(
                <Router>
                <Routes>
                    <Route path='/'  element={<Home/>}/>
                    <Route path='/Pathfinder' element={<Pathfinder/>}/>
                    <Route path='/Sorting' element={<Sorting/>}/>
                    <Route path='/RecursiveSort' element={<RecursiveSort/>}/>
                    <Route path='/Graph' element={<Graph/>}/>
                    <Route path='/Queen' element={<Queen/>}/>
                    <Route path='/Searching' element={<Searching/>}/>
                    <Route path='/Prime' element={<Seive/>}/>
                    <Route path='/BinarySearch' element={<BinarySearch/>}/>
                    <Route path='/ConvexHull' element={<ConvexHull/>}/>
                    <Route path='/turing' element={<TuringMachine/>}/>
                    <Route path='/Scheduling' element={<Scheduling/>}/>
                    <Route path='/Queue' element={<Queue/>}/>
                    <Route path='/Stack' element={<Stack/>}/>
                    <Route path='/tree' element={<BST/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/graphtraversal' element={<GraphTraversal/>}/>

                </Routes>
            </Router>
        
        );
    }
export default App;