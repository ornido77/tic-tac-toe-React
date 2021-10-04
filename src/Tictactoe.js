import React, { useState } from "react";
import "./ttt.css";

const Tictactoe = () => {
	/* This state will tell us whose turn is next.
	 And will help to decide if X or O will be displayed in a certain grid if it's been clicked.*/
	const [currentTurn, setTurn] = useState("x");

	/* This state sets what will be shown on the grids */
	const [cells, setCells] = useState(Array(9).fill(""));

	/* This state will be set if there is a winning combination, and will be shown on the UI */
	const [winner, setWinner] = useState();

	/* This function contains the logic to compute if there is a winner. 
	Having an array of all possible winning combinations. */
	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagonal: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};
		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === "" ||
					squares[pattern[1]] === "" ||
					squares[pattern[2]] === ""
				) {
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
	};

	/* This function changes the value of each grid as X and O */
	const handleClick = (num) => {
		// If it already has a value, then it cannot be clicked again
		if (cells[num] !== "") {
			alert("Already been clicked!");
			return;
		}
		if (winner === "x" || winner === "o") {
			return;
		}

		let squares = [...cells];

		if (currentTurn === "x") {
			squares[num] = "x";
			setTurn("o");
		} else {
			squares[num] = "o";
			setTurn("x");
		}
		checkForWinner(squares);
		setCells(squares);
	};

	// Handles Play again button
	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(""));
		setTurn("x");
	};

	// Handles Reset button
	const handleReset = () => {
		setCells(Array(9).fill(""));
		setTurn("x");
		setWinner(null);
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};
	return (
		<div className="Container">
			<h1>Tic - Tac - Toe</h1>
			<div className="turnReset">
				<p>
					Your turn: <span>{currentTurn}</span>
				</p>
				<button onClick={() => handleReset()}>Reset</button>
			</div>

			<table>
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<p className="win">{winner} is the winner!</p>
					<button onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
		</div>
	);
};

export default Tictactoe;
