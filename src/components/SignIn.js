import {Link} from 'react-router-dom'

function SignIn() {
	return (
		<>
			<div class="container d-flex justify-content-center">
				<form>
					<div class="form-group row">
						<div class="col-sm-15">
							<input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-15">
							<input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-10 d-flex justify-content-center">
							<Link to="/page-not-found">
								<button type="submit" class="btn btn-dark ">Sign in</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignIn