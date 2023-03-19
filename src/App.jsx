import './App.css';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GeneralLayout from './layout/GeneralLayout';

const App = () => {
  return (
    <div className="App">
      <GeneralLayout>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </GeneralLayout>
    </div>
  );
};

export default App;
