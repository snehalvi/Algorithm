import React, {Component} from 'react';
import CanvasSvg from "./canvasSVG";
import {getFibTree, getTree} from "./fib";
import Menu from "./menu";
import Navbar from "./navbar";
import Details from './datails';
import Instruct from '../Instructions/Instruct';
import instruct_gif from '../assets/recursion.gif';

class Graph extends Component {
    constructor() {
        super();
        this.state = {
            root:undefined,
            vertices:[],
            edges:[],
            current:-1,
            n:0,
            r:2,
            algo:0,
            offset:0,
            showModal:true,
        }
    }
    // setNumber = (event)=>{
    //     let value = event.target.valueAsNumber;
    //     if(value!== NaN && value<99)
    //         this.setState({inputNumber:value});
    //
    //     // document
    // }
    showModal = () => {
        this.setState({ 
                showModal: true
            });
      };
    
    hideModal = () => {
    this.setState({ showModal: false });
    };
    setAlgo = (pos, val) => {
        if (pos === 0) {
            // console.log("sup 0");
            this.setState({algo: val});
        }
    }
    setN = (pos, val) => {
        if (pos === 0) {
            // console.log("sup 0");
            this.setState({n: val});
        }
    }
    setR = (pos, val) => {
        if (pos === 0) {
            // console.log("sup 0");
            this.setState({r: val});
        }
    }
    addNumber = ()=>{
        // console.log(getFibTree(3));
        let tree = getTree(this.state.n,this.state.algo,this.state.r);
        this.setState({edges:[],vertices:[],offset:tree.x});
        this.state.vertices = [];
        // this.setState({});
        this.recur(tree,undefined);

    }
    handleReset = () => {
        this.setState({edges:[],vertices:[],isRunning:false});
    }

    recur = async (node,parent)=>{

        let vertices = this.state.vertices;
        let current = this.state.vertices.length;


        if( parent!==undefined ){
            if( node.children.length )
                vertices.push({label:node.tree.label,val:0,x:node.x,y:node.y,px:parent.x,py:parent.y});
            else
                vertices.push({label:node.tree.label,val:node.tree.node,x:node.x,y:node.y,px:parent.x,py:parent.y});
            this.setState({vertices,current});



            let edges = this.state.edges;
            edges.push({
                x1:parent.x,
                y1:parent.y,
                x2:node.x,
                y2:node.y
            });
            this.setState({edges});
        }else{
            if( node.children.length )
                vertices.push({label:node.tree.label,val:0,x:node.x,y:node.y,px:node.x,py:node.y});
            else
                vertices.push({label:node.tree.label,val:node.tree.node,x:node.x,y:node.y,px:node.x,py:node.y});
            this.setState({vertices,current});
        }
        await sleep(500);


        for(let i=0;i<node.children.length;i++){
            await this.recur( node.children[i],node );
            // let verticess = [...this.state.vertices];
            // verticess[current].val+=node.children[i].tree.node;
            this.setState({current});
            await sleep(500);
        }
        let verticess = [...this.state.vertices];
        verticess[current].val=node.tree.node;
        this.setState({vertices:verticess});
    }
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
                <Menu
                    setN={this.setN}
                    setR={this.setR}
                    setAlgo={this.setAlgo}
                    onStart={this.addNumber}
                    onReset={this.handleReset}
                />
                <Details
                    algo={this.state.algo}
                />
                <CanvasSvg
                    vertices={this.state.vertices}
                    edges={this.state.edges}
                    current={this.state.current}
                    offset={this.state.offset}
                />
            </div>
        );
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default Graph;