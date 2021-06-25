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

function Products({ products_list }) {
	return (
		<>
			<div class="container">
				<div class="row">
					<div class="col-sm">
						<h4>{products_list[0].product_type}</h4>
						<Link to="/office-chair">
							<img src={office_chair} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[1].product_type}</h4>
						<Link to="/office-desk">	
							<img src={office_desk} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[2].product_type}</h4>
						<Link to="/recliner">
							<img src={recliner} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
				</div>
				<div class="row">
					<div class="col-sm">
						<h4>{products_list[3].product_type}</h4>
						<Link to="/couch">	
							<img src={couch} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[4].product_type}</h4>
						<Link to="/bed">
							<img src={bed} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[5].product_type}</h4>
						<Link to="/dining-table">
							<img src={dining_table} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
				</div>
				<div class="row">
					<div class="col-sm">
						<h4>{products_list[6].product_type}</h4>
						<Link to="/dining-chair">
							<img src={dining_chair} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[7].product_type}</h4>
						<Link to="/air-conditioner">
							<img src={air_conditioner} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[8].product_type}</h4>
						<Link to="/fan">
							<img src={fan} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Products