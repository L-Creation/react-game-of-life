import React, { Component } from 'react';
import ControlPanel from './components/control-panel';
import LifeArea from './components/life-area';
import OptionsPanel from './components/options-panel';
import './App.css';

const FAMOUS_FIGURES = [
  {
    name: "oscillators",
    board: [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
  }
];

const USER_FIGURES = [{
  name: "your default figure",
  board: [[0,1,0,1,0,1,0],[1,0,1,0,1,0,1],[0,1,0,1,0,1,0],[1,0,1,0,1,0,1],[0,1,0,1,0,1,0],[1,0,1,0,1,0,1],[0,1,0,1,0,1,0]]
}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nRow: 30,
      nColumn: 50,
      world: [],
      play: true,
      speed: 150,
      generation: 0,
      timerOn: false,
      sizeHasToChange: true,
      famousFigures: FAMOUS_FIGURES,
      userFigures: [],
      figureName: ""
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
    this.onSetFigure = this.onSetFigure.bind(this);
    this.onFigureNameChange = this.onFigureNameChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    const firstWorld = this.buildWorld();
    let userFigures = JSON.parse(localStorage.getItem('Game-of-Life-Figures'));
    if (!userFigures) {
      userFigures = USER_FIGURES;
    }
    this.setState({world: firstWorld, userFigures: userFigures});
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
    let sizeChanged = false, sizeHasToChange = false, startTimer = false;
    if (this.state.sizeHasToChange) {
      sizeChanged = true;
    }
    if (!this.state.timerOn && this.state.play) {
      this.timer = setInterval(this.onNextGen,this.state.speed);
      startTimer = true;
    }
    if (sizeChanged || startTimer) {
      this.setState({timerOn: startTimer, sizeHasToChange: sizeHasToChange});
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

  destin(row, col, world, width = this.state.nColumn, height = this.state.nRow) {
    let alive = world[row][col], around = 0, column, line;
    for (let c = col - 1 ; c <= col + 1 ; c++) {
      if (c === -1) {
        column = width - 1;
      } else {
        column = c % width;
      }
      for (let r = row - 1 ; r <= row + 1 ; r++) {
        if (r === -1) {
          line = height - 1;
        } else {
          line = r % height;
        }
        if ( !(column === col && line === row) ) {
          if (world[line][column] > 0) {
            around += 1;
          }
        }
      }


    // for (let c = col - 1 ; c <= col + 1 ; c++) {
    //   if (c >= 0 && c < width) {
    //     for (let r = row - 1 ; r <= row + 1 ; r++) {
    //       if (r >= 0 && r < height && !(c === col && r === row) ) {
    //         if (world[r][c] > 0) {
    //           around += 1;
    //         }
    //       }
    //     }
    //   }
    }
    if (alive > 0 && around >= 2 && around <= 3) {
      return 1;
    } else if (alive < 1 && around === 3) {
      return 2;
    } else if (alive > 0 && around > 3) {
      return -1;
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
    this.setState({world: randomWorld, play: true, timerOn: false, generation: 0});
  }

  onSwitchCase(event) {
    const loc = event.target.id.match(/\d+/g);
    const row = loc[0];
    const col = loc[1];
    let changedWorld = JSON.parse(JSON.stringify(this.state.world));
    changedWorld[row].splice(col, 1, changedWorld[row][col] > 0 ? 0 : 1);
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
      this.setState({world: newWorld, nRow: height, nColumn: width, play: true, timerOn: false, generation: 0, sizeHasToChange: true});
    }
  }

  onSetFigure(figureName) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
      let newWorld = [], addedFigures = [];
      let givenFigures = this.state.famousFigures.map(figure => {
        return JSON.parse(JSON.stringify(figure));
      });
      if (this.state.userFigures.length > 0) {
        addedFigures = this.state.userFigures.map(figure => {
          return JSON.parse(JSON.stringify(figure));
        });
      }
      let lists = givenFigures.concat(addedFigures);
      for (let i = 0 ; i < lists.length ; i++) {
        if (lists[i].name === figureName) {
          newWorld = lists[i].board;
        }
      }
      if (newWorld && newWorld.length > 0) {
        let height = newWorld.length;
        let width = newWorld[0].length;
        this.setState({
          world: newWorld,
          nRow: height,
          nColumn: width,
          play: false,
          timerOn: false,
          generation: 0,
          sizeHasToChange: true
        });
      }
  }

  onFigureNameChange(event) {
    this.setState({ figureName: event.target.value });
  }

  onSave(event) {
    event.preventDefault();
    let updatedFigureList = [];
    if (this.state.userFigures && this.state.userFigures.length > 0) {
      updatedFigureList = this.state.userFigures;
    }
    const currentWorld = this.state.world;
    updatedFigureList.push({
      name: this.state.figureName,
      type: "user",
      board: currentWorld
    });
    localStorage.setItem('Game-of-Life-Figures', JSON.stringify(updatedFigureList));
    this.setState({ userFigures: updatedFigureList});
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
            sizeHasToChange={this.state.sizeHasToChange}
          />
          <OptionsPanel
            onSetSpeed={this.onSetSpeed}
            onSetBoard={this.onSetBoard}
            onSetFigure={this.onSetFigure}
            famousFigures={this.state.famousFigures}
            userFigures={this.state.userFigures}
            figureName={this.state.figureName}
            onFigureNameChange={this.onFigureNameChange}
            onSave={this.onSave}
          />
        </div>
      </div>
    );
  }
}

export default App;
