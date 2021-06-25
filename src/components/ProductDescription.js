import officeChair from '../images/officeChair.png'
import officeDesk from '../images/officeDesk.png'
import recliner from '../images/recliner.png'
import couch from '../images/couch.png'
import bed from '../images/bed.png'
import fan from '../images/fan.png'
import airConditioner from '../images/airConditioner.png'
import diningTable from '../images/diningTable.png'
import diningChair from '../images/diningChair.png'
import {Link} from 'react-router-dom'

function ProductDescription({ product }) {
	return (
		<>
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-6">
						<img alt="testing" src={product.id === 1 && officeChair} class="img-responsive" width="100%" height="auto" />
						<img alt="testing" src={product.id === 2 && officeDesk} class="img-responsive" width="100%" height="auto" />
						<img alt="testing" src={product.id === 3 && recliner} class="img-responsive" width="100%" height="auto" />
						<img alt="testing" src={product.id === 4 && couch} class="img-responsive" width="100%" height="auto" />
						<img alt="testing" src={product.id === 5 && bed} class="img-responsive" width="100%" height="auto" />
						<img alt="testing" src={product.id === 6 && diningTable} class="img-responsive" width="100%" height="auto" />
						<img alt="testing" src={product.id === 7 && diningChair} class="img-responsive" width="100%" height="auto" />
						<img alt="testing" src={product.id === 8 && airConditioner} class="img-responsive" width="100%" height="auto" />
						<img alt="testing" src={product.id === 9 && fan} class="img-responsive" width="100%" height="auto" />

					</div>
					<div class="col-4">
						<h5>{product.description}</h5>
						<button type="submit" class="btn btn-primary mx-3 my-3">Add to cart</button>
						<Link to="/cart">
							<button type="submit" class="btn btn-dark mx-1 my-3">Checkout</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductDescription