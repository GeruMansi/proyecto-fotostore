import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path={'/'}>
          <ItemListContainer greeting={'Bienvenido/a a FotoStore'}/>
        </Route>

        <Route exact path={'/category/'}>
          <Categories />
        </Route>

        <Route path={'/category/:catId'}>
          <ItemListContainer greeting={'Bienvenido/a a FotoStore'}/>
        </Route>

        <Route path={'/item/:itemId'}>
          <ItemDetailContainer />
        </Route>

        <Route exact path={'/cart'}>
          <h3>Esta es la página del carrito</h3>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
