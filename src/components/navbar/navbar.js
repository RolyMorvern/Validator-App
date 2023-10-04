import { telephoneValidator, triangleValidator, home } from "../../links.js"
import './navbar.css';
import $ from "jquery";
import { ImPhone } from "react-icons/im";
import { BiShapeTriangle, BiMenu, BiSolidHomeAlt2 } from "react-icons/bi";
function toggleNav() {
	$(".nav-links").toggleClass("mobile-nav");
	if ($(".nav-links").hasClass("mobile-nav")) {
		$("body").css("overflow", "hidden");
	} else {
		$("body").css("overflow", "visible");		
	}
}
function Navbar () {
	return (
		<nav>
			<div id="mobile-icon">
				<BiMenu onClick={toggleNav} id="hamburger-icon" />
			</div>
			<div className="nav-links desktop-nav">
				<div>
					<a className="nav-item" href={home}><BiSolidHomeAlt2 /> Home</a>
				</div>
				<div>
					<a className="nav-item" href={telephoneValidator}><ImPhone /> Telephone Validator</a>
				</div>
				<div>
					<a className="nav-item" href={triangleValidator}><BiShapeTriangle /> Right Angled Triangle Validator</a>
				</div>
			</div>
		</nav>
	)
}
export default Navbar;