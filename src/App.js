import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './UI/Navbar';
import EditUser from './User/EditUser';
import UserDetails from './User/UserDetails';
import Users from './User/Users';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Users/>} />
          <Route path="user-details/:id" element={<UserDetails />} />
          <Route path="edit-user/:id" element={<EditUser />} />
        </Routes>
    </div>
  );
}

export default App;
