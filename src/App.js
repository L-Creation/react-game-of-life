import React, { Component } from 'react';
import ControlPanel from './components/control-panel';
import LifeArea from './components/life-area';
import OptionsPanel from './components/options-panel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nRow: 20,
      nColumn: 20,
      world: [],
      play: true,
      speed: 250,
      generation: 0,
      timerOn: false
    };

    this.onStart = this.onStart.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onSwitchCase = this.onSwitchCase.bind(this);
    this.buildWorld = this.buildWorld.bind(this);
    this.onNextGen = this.onNextGen.bind(this);
    this.nextGen = this.nextGen.bind(this);
    this.onRandom = this.onRandom.bind(this);
    this.onSetSpeed = this.onSetSpeed.bind(this);
    this.onSetBoard = this.onSetBoard.bind(this);
  }

  componentDidMount() {
    const firstWorld = this.buildWorld();
    console.log("App Did Mount","first world created", firstWorld);
    this.setState({world: firstWorld});
  }

  buildWorld(type = "random", nRow = this.state.nRow, nColumn = this.state.nColumn) {
    let randomWorld = [];
    for (let r = 0 ; r < nRow ; r++) {
      let row = [];
      for (let c = 0 ; c < nColumn ; c++) {
        if(Math.random() > 0.5 && type === "random") {
          row[c] = 1;
        } else {
          row[c] = 0;
        }
      }
      randomWorld.push(row);
    }
    return randomWorld;
  }

  componentDidUpdate() {
    if (!this.state.timerOn && this.state.play) {
      this.timer = setInterval(this.onNextGen,this.state.speed);
      this.setState({timerOn: true});
    }
  }

  onNextGen() {
    if (this.state.play) {
      this.nextGen();
    }
  }

  nextGen() {
    let newWorld = [], width = this.state.nColumn, height = this.state.nRow;
    for (let r = 0 ; r < height ; r++) {
      newWorld[r] = [];
      for (let c = 0 ; c < width ; c++) {
        let alive = this.destin(r,c,this.state.world);
        newWorld[r].push(alive);
      }
    }
    this.setState({world: newWorld, generation: this.state.generation + 1});
  }

  destin(row, col, world) {
    let alive = world[row][col], around = 0;
    for (let c = col - 1 ; c <= col + 1 ; c++) {
      if (c >= 0 && c < this.state.nColumn) {
        for (let r = row - 1 ; r <= row + 1 ; r++) {
          if (r >= 0 && r < this.state.nRow && !(c === col && r === row) ) {
            if (this.state.world[r][c] === 1) {
              around += 1;
            }
          }
        }
      }
    }
    if (alive === 1 && around >= 2 && around <= 3) {
      return 1;
    } else if(alive === 0 && around === 3) {
      return 1;
    } else {
      return 0;
    }
  }

  onStart() {
    this.setState({play: true});
  }

  onPause() {
    clearTimeout(this.timer);
    this.setState({play: false, timerOn: false});
  }

  onClear() {
    let clearWorld = this.buildWorld("clear");
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.setState({world: clearWorld, play: false, timerOn: false, generation: 0});
  }

  onRandom() {
    let randomWorld = this.buildWorld();
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.setState({world: randomWorld, play: false, timerOn: false, generation: 0});
  }

  onSwitchCase(event) {
      const row = event.path[2].rowIndex;
      const col = event.path[1].cellIndex;
      let changedWorld = this.state.world;
      changedWorld[row].splice(col, 1, changedWorld[row][col] === 1 ? 0 : 1);
      this.setState({world: changedWorld});
  }

  onSetSpeed(speed) {
    return () => {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.setState({speed: speed, timerOn: false});
    }
  }

  onSetBoard(width, height) {
    return () => {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      let newWorld = this.buildWorld("random", height, width);
      this.setState({world: newWorld, nRow: height, nColumn: width, play: false, timerOn: false, generation: 0});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>The Game of Life</h1>
        </div>
        <div className="App-body">
          <ControlPanel
            onStart={this.onStart}
            onPause={this.onPause}
            onClear={this.onClear}
            onRandom={this.onRandom}
            generation={this.state.generation}
          />
          <LifeArea
            world={this.state.world}
            onSwitchCase={this.onSwitchCase}
          />
          <OptionsPanel
            onSetSpeed={this.onSetSpeed}
            onSetBoard={this.onSetBoard}
          />
        </div>
      </div>
    );
  }
}

export default App;