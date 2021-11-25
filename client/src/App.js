import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader';


function App() {
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
