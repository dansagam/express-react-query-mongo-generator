import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppTopBar/AppHeader';
import { getCustomersFromServer } from './reducers/AsyncSlice/customerAsync';
import HomeRoutes from './components/HomeRoutes/HomeRoutes';
import CustomerRoutes from './components/CustomerRoutes/CustomerRoutes';
import CustomerEdit from './components/CustomerEdit/CustomerEdit';


function App() {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getCustomersFromServer())
   })
   return (
      <div className="App">
         <AppHeader />
         <Routes>
            <Route
               name='home-route'
               exact path={'/'}
               element={<HomeRoutes />}
            />
            <Route
               name='customerlist-route'
               path={'customers'}
               element={<CustomerRoutes />}
            >
               <Route
                  name='customer-route'
                  path={':customerId'}
                  element={<CustomerEdit />}
               />
            </Route>
            <Route
               name='customer-route'
               path={'/customer/:customerId'}
               element={<CustomerRoutes />}
            />
            <Route
               name='no-match'
               path={'*'}
               element={<main>
                  there no match to the route you click
               </main>}
            />
         </Routes>
      </div>
   );
}

export default App;
