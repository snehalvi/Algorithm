import graph from "./images/graph.png";
import primes from "./images/primes.jpg";
import sort from "./sort.png";
import queen from "./images/queen.PNG";
import binSearch from "./images/binaryTree.png";
import convex from './images/convexHull.png';
import turing from './images/turing.jpg';
import Recursion from './images/Recursion.jpg';
import Schduling from './images/Schduling.png';
import Stack from './images/stack.png';
import Queue from './images/queue.png';
import Sorting from './images/sorting.png';
import Bst from './images/bst.png';
//import list from './images/list.png';
export function getDetails(){
   return [
       {
           id:1,
           title:"Pathfinder",
           description:"Visualize graph algorithms like dijkstra, BFS, DFS",
           route:"/pathfinder",
           img:graph
       },
       {
            id:2,
            title:"Sorting Algorithm",
            description:"Compare Different Sorting Algorithms.",
            route:"/sorting",
            img:sort 
       },
       {
            id:3,
            title:"Recursive Sorting",
            description:"Compare Different Recursive Sorting Algorithms",
            route:"/recursiveSort",
            img:Sorting
       },
       {
           id:4,
           title:"Recursion Tree",
           description:"The process in which a function calls itself directly or indirectly is called recursion.",
           route:"/graph",
           img:Recursion
       },
       
       {
            id:5,
            title:"Searching",
            description:"Visualize different searching algorithms like Linear Search, Binary Search.",
            route:"/Searching",
            img:binSearch
       },
       {
            id:6,
            title:"Binary Search",
            description:"Binary search is an efficent algorithm for finding an item from a sorted list of item",
            route:"/BinarySearch",
            img:Bst
       },
       {
           id:7,
           title:"N Queen",
           description:"The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
           route:"/queen",
           img:queen
       },
       {
           id:8,
           title:"Prime Numbers",
           description:"Visualize how Seive is better than brute force for finding Prime Numbers.",
           route:"/prime",
           img:primes
       },
       {
           id:9,
           title:"Convex Hull",
           description:"The convex hull of a set of points is the smallest convex polygon that contains all the points of it.",
           route:"/convexhull",
           img:convex
       },
       {
           id:10,
           title:"Turing Machine",
           description:"A Turing machine is a mathematical model of computation that defines an abstract machine that manipulates symbols on a strip of tape according to a table of rules.",
           route:"/turing",
           img:turing
       },
       
       {
            id:11,
            title:"Scheduling",
            description:"Compare different scheduling algorithms.",
            route:"/Scheduling",
            img:Schduling
       },
       {
            id:12,
            title:"Stack",
            description:"Visualize Stack data structure.",
            route:"/Stack",
            img:Stack
        },
        {
            id:13,
            title:"Queue",
            description:"Visualize Queue data structure.",
            route:"/Queue",
            img:Queue
        },
        {
            id:13,
            title:"Tree",
            description:"Visualize Tree Algorithms.",
            route:"/tree",
            img:Bst
        },
        
        


   ]
}