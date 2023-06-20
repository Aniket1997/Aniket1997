import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UserListing from './Component/UserListing';
import AddUser from './Component/AddUser';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import EditUser from './Component/EditUser';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
       
        <Routes>
         
          <Route path='/user' element={<UserListing></UserListing>}></Route>
          <Route path='/user/add' element={<AddUser></AddUser>}></Route>
          <Route path='/user/edit/:code' element={<EditUser></EditUser>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position"
        position="bottom-right"></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;