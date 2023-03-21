import './App.css';

import { Outlet } from 'react-router-dom';

import GeneralLayout from './layout/GeneralLayout';
import Footer from './ui-components/Footer';
import Header from './ui-components/Header';
const App = () => {
  return (
    <div className="App">
      <GeneralLayout>
        <Header align={'flex-end'} height={'10vh'} justify={'center'}></Header>
        <Outlet />
        <Footer />
      </GeneralLayout>
    </div>
  );
};

export default App;
