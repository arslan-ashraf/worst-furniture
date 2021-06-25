import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navigation from './components/Navigation'
import Cart from './components/Cart'
import Products from './components/Products'
import Sign_in from './components/Sign_in'
import Sign_up from './components/Sign_up'
import Home from './components/Home'
import Page_not_found from './components/Page_not_found'
import Product_description from './components/Product_description'

const products_list = [
  {id: 1, product_type: 'Office Chair', description: "This is a terrific product if you're looking to ruin your back!", 
  in_cart: false, quantity: 0, image_link: '../testimage.png', description_url: '/office-chair'},
  {id: 2, product_type: 'Office Desk', description: "A broken office desk definitely not worth buying!", 
  in_cart: false, quantity: 0, image_link: './testimage.png', description_url: '/office-desk'},
  {id: 3, product_type: 'Recliner', description: "A recliner that doesn't even recline! #notevenreal",
  in_cart: false, quantity: 0, image_link: './testimage.png', description_url: '/recliner'},
  {id: 4, product_type: 'Couch', description: "Used, torn, stinky!  That's the right way to describe this couch.  Please buy it...", 
  in_cart: false, quantity: 0, image_link: './testimage.png', description_url: '/couch'},
  {id: 5, product_type: 'Bed', description: "This bed was hand picked out of the trash on a New York City sidewalk so it must be in excellent condition!", 
  in_cart: false, quantity: 0, image_link: './testimage.png', description_url: '/bed'},
  {id: 6, product_type: 'Dining Table', description: 'Ah, a spectacularly awful dining table. A great purchase if you enjoy losing your money!', 
  in_cart: false, quantity: 0, image_link: './testimage.png', description_url: '/dining-table'},
  {id: 7, product_type: 'Dining Chair', description: "To go along with the terrible dining table, ofcourse the dining chair is a must. We're just ripping you off!", 
  in_cart: false, quantity: 0, image_link: './testimage.png', description_url: '/dining-chair'},
  {id: 8, product_type: 'Air Conditioner', description: "An air conditioner unlike anyother, #notevenreal", 
  in_cart: false, quantity: 0, image_link: './testimage.png', description_url: '/air-conditioner'},
  {id: 9, product_type: 'Fan', description: "An fan courtesy of a local landfill.  It is pretty much guaranteed to not work.  You definitely don't want to miss out on this one!", 
  in_cart: false, quantity: 0, image_link: './testimage.png', description_url: '/fan'},
]

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <br></br>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/products"><Products products_list={products_list} /></Route>
          <Route path={products_list[0].description_url}><Product_description product={products_list[0]} /></Route>
          <Route path={products_list[1].description_url}><Product_description product={products_list[1]} /></Route>
          <Route path={products_list[2].description_url}><Product_description product={products_list[2]} /></Route>
          <Route path={products_list[3].description_url}><Product_description product={products_list[3]} /></Route>
          <Route path={products_list[4].description_url}><Product_description product={products_list[4]} /></Route>
          <Route path={products_list[5].description_url}><Product_description product={products_list[5]} /></Route>
          <Route path={products_list[6].description_url}><Product_description product={products_list[6]} /></Route>
          <Route path={products_list[7].description_url}><Product_description product={products_list[7]} /></Route>
          <Route path={products_list[8].description_url}><Product_description product={products_list[8]} /></Route>
          <Route path="/sign-in"><Sign_in /></Route>
          <Route path="/sign-up"><Sign_up /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/page-not-found"><Page_not_found /></Route>
          <Route path=""><Page_not_found /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
