import { useState } from 'react'
import './triangle.css'
function Input (props) {
	return (
        <input type="number" id={props.id} className="number-input" />
	)
}
function TriangleValidator () {
	let [voi, setVoi] = useState("Undefined");
	let [longestSide, setLongestSide] = useState("");
	let [shortestSides, setShortestSides] = useState("");
	function calculate () {
		let sides = [
			document.getElementById("input-1").value,
			document.getElementById("input-2").value,
			document.getElementById("input-3").value
		];
		let calculateLongest = (sides) => {
			let longest = sides[0];
			for (let i = 1; i <= 3; i++) {
				if (sides[i] > longest) {
					longest = sides[i];
				}
			}
			return longest;
		}
		let longestSide = calculateLongest(sides);
	    let indexOfLongest = sides.indexOf(longestSide);
	    let shortestSides = sides.slice(0, indexOfLongest).concat(sides.slice(indexOfLongest + 1));
		if (sides[0] == "" || sides[1] == "" || sides[2]  == "") {
			setVoi("Undefined");
		} else if ((shortestSides[0] * shortestSides[0]) + (shortestSides[1] * shortestSides[1]) == longestSide * longestSide) {
			setVoi("Valid");
			setLongestSide(longestSide);
			setShortestSides(shortestSides);
		} else if (shortestSides[0] < 0 || shortestSides[1] < 0 || longestSide < 0) {
			setVoi("Invalid");
			setLongestSide(longestSide);
			setShortestSides(shortestSides);
		} else {
			setVoi("Invalid");
			setLongestSide(longestSide);
			setShortestSides(shortestSides);
		}
	}
	return (
		<div className="container">
			<h1 className="title">Right Angle Triangle Validator</h1>
			<span className="subheading">Provide dimensions and check if it’s a right angle triangle.</span>
			<span className="subheading side">Side 1: </span><Input id="input-1" />
			<br  />
			<br  />
			<span className="subheading side">Side 2: </span><Input id="input-2" />
			<br  />
			<br  />
			<span className="subheading side">Side 3: </span><Input id="input-3" />
			<br />
			<br />
			<input onClick={calculate} type="submit" id="submit" />
			<br />
			<br />
			<br />
			<h1>This triangle is: </h1>
			<h1 id={voi}>{voi}</h1>
			<br />
			<br />
			{
				voi == "Valid"
				? <><h2>But why?</h2><br /><br /><span>Because <i>{longestSide}<sup>2</sup> = {shortestSides[0]}<sup>2</sup> + {shortestSides[1]}<sup>2</sup></i></span></>
				: voi == "Invalid"
				? <><h2>But why?</h2><br /><br /><span>Because <i>{longestSide}<sup>2</sup> ≠ {shortestSides[0]}<sup>2</sup> + {shortestSides[1]}<sup>2</sup></i></span></>
				: <p></p>
			}
		</div>
	)
}
export default TriangleValidator