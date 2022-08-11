import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import AddBook from './component/pages/AddBook/AddBook';
import ErrorPage from './component/pages/ErrorPage/ErrorPage';
import Home from './component/pages/Home/Home';
import EditBooks from './component/pages/ShowBooks/EditBooks';
import ShowBooks from './component/pages/ShowBooks/ShowBooks';

function App() {
  return (
    <div className="bg-white h-screen">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/showBook" element={<ShowBooks></ShowBooks>}></Route>
        <Route path="/addBook" element={<AddBook></AddBook>}></Route>
        <Route path="/editBooks" element={<EditBooks></EditBooks>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
