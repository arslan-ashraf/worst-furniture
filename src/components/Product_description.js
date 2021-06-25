import office_chair from '../images/office_chair.png'
import office_desk from '../images/office_desk.png'
import recliner from '../images/recliner.png'
import couch from '../images/couch.png'
import bed from '../images/bed.png'
import fan from '../images/fan.png'
import air_conditioner from '../images/air_conditioner.png'
import dining_table from '../images/dining_table.png'
import dining_chair from '../images/dining_chair.png'
import {Link} from 'react-router-dom'

function added_to_cart({product}){
	product.in_cart = true
	console.log(product.in_cart)
}

function Product_description({ product }) {
	return (
		<>
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-6">
						<img src={product.id == 1 && office_chair} class="img-responsive" width="100%" height="auto" />
						<img src={product.id == 2 && office_desk} class="img-responsive" width="100%" height="auto" />
						<img src={product.id == 3 && recliner} class="img-responsive" width="100%" height="auto" />
						<img src={product.id == 4 && couch} class="img-responsive" width="100%" height="auto" />
						<img src={product.id == 5 && bed} class="img-responsive" width="100%" height="auto" />
						<img src={product.id == 6 && dining_table} class="img-responsive" width="100%" height="auto" />
						<img src={product.id == 7 && dining_chair} class="img-responsive" width="100%" height="auto" />
						<img src={product.id == 8 && air_conditioner} class="img-responsive" width="100%" height="auto" />
						<img src={product.id == 9 && fan} class="img-responsive" width="100%" height="auto" />

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

export default Product_description