import './home.css'
import { telephoneValidator, triangleValidator } from "../../links.js"
function Card (props) {
	return (
		<a href={props.link} className="card">
		    <h2>{props.text}</h2>
		    <p>{props.describe}</p>
		    <img className="image" src={props.image} />
			<button class="learn-more">
			  <span class="circle" aria-hidden="true">
			  <span class="icon arrow"></span>
			  </span>
			  <span class="button-text"><a href={props.link}>Go There!</a></span>
			</button>
		</a>
	)
}
function Home () {
	return (
		<div className="container">
			<h2 id="header">Please Select One Of The Following Validators:</h2>
			<div className="cards-container">
				<Card
					text="Telephone Validator" 
					describe="Validate any phone number!" 
					image="https://cdn.pixabay.com/photo/2018/08/09/10/46/telephone-3594206_1280.jpg" 
					link={telephoneValidator} 
				/>
				<Card
					text="Right Angled Triangle Validator" 
					describe="Check for right angled triangles!" 
					image="https://cdn.pixabay.com/photo/2020/03/21/03/49/triangle-4952582_640.jpg" 
					link={triangleValidator}
				/>
			</div>
		</div>
	)
}
export default Home;