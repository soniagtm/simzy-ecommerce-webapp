import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";


const App = () => {

  // const user = true

  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Home/>} > </Route>
    //     <Route path='/Products/:category' element={<ProductList/>} > </Route>
    //     <Route path='/Product/:id' element={<Product/>} > </Route>
    //     <Route path='/Cart' element={<Product/>} > </Route>
    //     <Route path='/Login' element={ user ? <Navigate to = "/"/> : <Login/> } > </Route>
    //     <Route path='/Register' element={ user ? <Navigate to = "/"/> : <Register/> }  > </Route>
    //   </Routes>
    // </Router>
      <Cart />
  );
};

export default App;
