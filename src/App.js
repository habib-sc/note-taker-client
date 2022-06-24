import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoteEdit from './components/NoteEdit/NoteEdit';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/note/edit/:id' element={<NoteEdit></NoteEdit>}></Route>
      </Routes>
    </div>
  );
}

export default App;
