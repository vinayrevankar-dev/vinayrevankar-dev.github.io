import React from 'react';
import "./assets/css/main.css";
import SpotlightGroup from "./components/SpotlightGroup.js"
import FeatureGroup from "./components/FeatureGroup.js"
import Sidebar from "./components/Sidebar.js"
import Intro from "./components/Intro.js"
import Footer from "./components/Footer.js"
import Contact from "./components/Contact.js"

const App = () => (
    <div>
			<Sidebar/>
			<div id="wrapper">
					<Intro/>
					<SpotlightGroup/>
					<FeatureGroup/>
					<Contact/>
			</div>
			<Footer/>

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
    </div>
)

export default App;
