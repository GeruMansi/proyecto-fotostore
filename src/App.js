import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Categories from './components/Categories';
import Footer from './components/Footer';
import CartProvider from './components/CartProvider';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import User from './components/User';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path={'/'}>
            <ItemListContainer />
          </Route>

          <Route exact path={'/category/'}>
            <Categories />
          </Route>

          <Route path={'/category/:catId'}>
            <ItemListContainer />
          </Route>

          <Route path={'/item/:itemId'}>
            <ItemDetailContainer />
          </Route>

          <Route exact path={'/user'}>
            <User />
          </Route>

          <Route exact path={'/cart'}>
            <Cart />
          </Route>

          <Route exact path={'/checkout'}>
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
