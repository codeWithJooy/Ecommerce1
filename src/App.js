import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Slider from "react-slick";
import ItemDisplay from './Pages/ItemDisplay';
import Category from './Pages/Category';
import Cart from './Pages/Cart';
function App() {
  return (
     <BrowserRouter>
       <Switch>
          <Route path="/home" component={Home} />
          <Route path="/item" component={ItemDisplay} />
          <Route path="/category" component={Category} />
          <Route path="/cart" component={Cart} />
       </Switch>
     </BrowserRouter>
  )
}

export default App;
