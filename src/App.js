import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Clothing from './Clothing'
import Beverages from './Beverages'
import Appliances from './Appliances'
import Cosmetics from './Cosmetics'
import Stationary from './Stationary'
import ShoppingCart from './ShoppingCart'
import Error from './Error'
import { Switch, Route } from "react-router-dom";

function App() {
  return (

    <Switch>
      <Route exact path = "/" component={Home} />
      <Route exact path ="/login" component={Login} />
      <Route exact path ="/register" component ={Register} />
      <Route exact path ="/clothing" component ={Clothing} />
      <Route exact path ="/beverages" component ={Beverages} />
      <Route exact path ="/appliances" component ={Appliances} />
      <Route exact path ="/cosmetics" component ={Cosmetics} />
      <Route exact path ="/stationary" component ={Stationary} />
      <Route exact path ="/shoppingcart" component ={ShoppingCart} />
      <Route component={Error} />
    </Switch>
    
  );
}

export default App;
