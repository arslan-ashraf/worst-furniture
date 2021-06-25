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

function Products({ products_list }) {
	return (
		<>
			<div class="container">
				<div class="row">
					<div class="col-sm">
						<h4>{products_list[0].product_type}</h4>
						<Link to="/office-chair">
							<img src={officeChair} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[1].product_type}</h4>
						<Link to="/office-desk">	
							<img src={officeDesk} class="img-responsive" width="100%" height="auto" />
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
							<img src={diningTable} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
				</div>
				<div class="row">
					<div class="col-sm">
						<h4>{products_list[6].product_type}</h4>
						<Link to="/dining-chair">
							<img src={diningChair} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[7].product_type}</h4>
						<Link to="/air-conditioner">
							<img src={airConditioner} class="img-responsive" width="100%" height="auto" />
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