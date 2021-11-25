import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCustomersFromServer } from './reducers/AsyncSlice/customerAsync';


function App() {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getCustomersFromServer())
   })
   return (
      <div className="App">
         <AppHeader />
         <Routes>
            <Route name='home' exact path={'/'} component={''} />
         </Routes>
      </div>
   );
}

export default App;
