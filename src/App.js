
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/Home/Home';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartView from './componentes/Cart/CartList/CartList';
import CartProvider from './componentes/Context/CartContext';
import Checkout from './componentes/Checkout/Checkout';
import ItemListFiltrados from './componentes/ItemListContainer/ItemListFiltrados';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/catalogo' element={<ItemListFiltrados />}/>
          <Route exact path='/catalogo/:productCat' element={<ItemListFiltrados />}/>
          <Route exact path='/producto/:productId' element={<ItemDetailContainer />}/>
          <Route exact path='/carrito' element={<CartView />}/>
          <Route exact path='/checkout' element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
