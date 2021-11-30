import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for(let i=0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

// 함수형 컴포넌트
function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {

  renderSquare(i) {
    return (<Square 
      value={this.props.squares[i]}
      onClick={()=> this.props.onClick(i)}
      />);
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history:[{
        squares : Array(9).fill(null),
      }],
      stepNumber : 0,
      xIsNext : true
    };
  }

  //여러 하위 컴포넌트로부터 데이터를 모으거나 두 개의 하위 컴포넌트들이 서로 통신하기를 원하면
  //상위 컴포넌트 안으로 State를 이동시켜라
  //상위 컴포넌트는 props를 통해 하위 컴포넌트로 state를 전달해줄 수 있다.
  handleClick(i){
    const history = this.state.history.slice(0,this.state.stepNumber+1);
    const current = history[history.length -1];
    const squares = current.squares.slice(); //배열 복사, 원본은 건드리지 않고 => 불변성
    if (calculateWinner(squares) || squares[i]){
      //이미 이긴 게임이거나 칠해진 사각형을 무시하도록
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history : history.concat([{
        squares : squares
      }]),
      stepNumber : history.length,
      xIsNext : !this.state.xIsNext,
    });
  }

  jumpTo(step){
   this.setState({
     stepNumber : step,
     xIsNext : (step%2)===0,
   });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    //history
    const moves = history.map((step, move)=>{
      const desc = move ? 
        'Go to move #' + move :
        'Go to game start';
      return(
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if(winner){
      status = 'Winner: ' + winner;
    }else{
      status = 'Next player' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i)=>this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
