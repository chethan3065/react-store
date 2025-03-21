import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register"
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Products />} />
        <Route path="home" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Products from "./components/Products";

// function App(props) {
//   return (
//     <>
//       <Header/>
//       <Products/>
//       <Footer/>
//     </>
//   )
// }

// export default App;
