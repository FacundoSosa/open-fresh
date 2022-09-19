
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./componentes/Home/Home.jsx"
import ItemListContainer from './componentes/Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/Container/ItemDetailContainer/ItemDetailContainer';
import Carrito from './componentes/Carrito/CartView/Carrito';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/catalogo' element={<ItemListContainer />}/>
          <Route exact path='/catalogo/:productCat' element={<ItemListContainer />}/>
          <Route exact path='/producto/:productId' element={<ItemDetailContainer />}/>
          <Route exact path='/carrito' element={<Carrito />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
