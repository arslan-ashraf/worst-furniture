import {Link} from 'react-router-dom'

function Sign_up() {
	return (
		<>
			<div class="container d-flex justify-content-center">
				<form>
					<div class="form-group row">
						<div class="col-sm-20">
							<input type="First Name" class="form-control" id="inputPassword3" placeholder="First Name" />
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-20">
							<input type="Last Name" class="form-control" id="inputPassword3" placeholder="Last Name" />
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-20">
							<input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-20">
							<input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-10 d-flex justify-content-center">
							<Link to="/page-not-found">
								<button type="submit" class="btn btn-dark ">Sign Up</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default Sign_up