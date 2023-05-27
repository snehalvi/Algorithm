import React, { Component } from 'react'
import { initializeIcons } from '@fluentui/react';
import './GraphTraversal.css';
import { Board } from './components/Board/Board';

initializeIcons();

export default class GraphTraversal extends Component {
    render() {
      return (
        <Board/>
      )
    }
  }

