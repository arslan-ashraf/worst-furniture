import {Link} from 'react-router-dom'
import logo from '../images/wfImage.png'

function Navigation() {
	return (
		<>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <Link to="/">
		  	<img alt="testing" src={logo} class="img-responsive" width="40px" height="auto" />
		  </Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		    	<li className="nav-item active">
			        <Link to="/">
			        	<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
			        </Link>
		    	</li>
		    	<li className="nav-item">
		    		<Link to="/products">
		        		<a className="nav-link" href="/products">Products</a>
		        	</Link>
		    	</li>
		    	<li className="nav-item">
		    		
		        		<a className="nav-link" href="https://github.com/arslan-ashraf/worst-furniture">Github: Design</a>
		        	
		    	</li>
		    </ul>
		</div>

		  	<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
			    <ul className="navbar-nav">
			    	<li className="nav-item">
			    		<Link to="/sign-in">
			        		<a className="nav-link" href="/sign-in">Sign In</a>
			        	</Link>
			    	</li>
				    	<li className="nav-item">
				    		<Link to="/sign-up">
				        		<a className="nav-link" href="sign-up">Sign Up</a>
				        	</Link>
				    	</li>
				    <li className="nav-item active">
				        <Link to="/cart">
				        	<a className="nav-link" href="/cart">Cart<span className="sr-only">(current)</span></a>
				        </Link>
			    	</li>
			    </ul>
		    </div>


		</nav>
	</>
	)
}

export default Navigation