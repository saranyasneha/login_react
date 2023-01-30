
import './App.css';
import Login from './pages/Login';
import Add from './components/Add';
import Edit from './components/Edit';
import StudentTable from './components/StudentTable';

import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentView from './components/studentsMarks';


function App() {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/studentsMarkDetails" element={<StudentTable/>} />
      <Route path="/create" element={<Add/>}></Route>
      <Route path="/edit/:id" element={<Edit/>}></Route>
      <Route path="/studentsMarks" element={<StudentView/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
