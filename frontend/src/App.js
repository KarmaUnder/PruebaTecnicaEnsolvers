import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Index from './pages/index';
import Create from './pages/create';
import View from './pages/view';
import Store from './store/store';
import { useEffect } from 'react';
import { useAppContext } from "../src/store/store"


function App() {

  useEffect(()=>{
    store.loadItems()
},[])
const store = useAppContext();

  return (
    <Store>
    <BrowserRouter>
       <Routes>
          <Route path='/' element ={<Index/>}/>
          <Route path='create' element ={<Create/>}/>
          <Route path='view/:noteId' element ={<View/>}/>
       </Routes>
    </BrowserRouter>
    </Store>
  );
}

export default App;
