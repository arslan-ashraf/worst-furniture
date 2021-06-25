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
							<img alt="testing" src={officeChair} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[1].product_type}</h4>
						<Link to="/office-desk">	
							<img alt="testing" src={officeDesk} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[2].product_type}</h4>
						<Link to="/recliner">
							<img alt="testing" src={recliner} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
				</div>
				<div class="row">
					<div class="col-sm">
						<h4>{products_list[3].product_type}</h4>
						<Link to="/couch">	
							<img alt="testing" src={couch} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[4].product_type}</h4>
						<Link to="/bed">
							<img alt="testing" src={bed} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[5].product_type}</h4>
						<Link to="/dining-table">
							<img alt="testing" src={diningTable} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
				</div>
				<div class="row">
					<div class="col-sm">
						<h4>{products_list[6].product_type}</h4>
						<Link to="/dining-chair">
							<img alt="testing" src={diningChair} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[7].product_type}</h4>
						<Link to="/air-conditioner">
							<img alt="testing" src={airConditioner} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
					<div class="col-sm">
						<h4>{products_list[8].product_type}</h4>
						<Link to="/fan">
							<img alt="testing" src={fan} class="img-responsive" width="100%" height="auto" />
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Products