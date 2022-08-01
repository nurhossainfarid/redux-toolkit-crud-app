import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import AddBook from './component/pages/AddBook/AddBook';
import Home from './component/pages/Home/Home';
import ShowBooks from './component/pages/ShowBooks.js/ShowBooks';

function App() {
  return (
    <div className="bg-white h-screen">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/showBook" element={<ShowBooks></ShowBooks>}></Route>
        <Route path="/addBook" element={<AddBook></AddBook>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
