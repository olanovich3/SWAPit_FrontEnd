import './App.css';

import { Outlet } from 'react-router-dom';

import GeneralLayout from './layout/GeneralLayout';
import Footer from './ui-components/Footer';
import Header from './ui-components/Header';
const App = () => {
  return (
    <div className="App">
      <GeneralLayout>
        <Header direction={'row'} height={'10vh'} justify={'space-between'} />
        <Outlet />
        <Footer />
      </GeneralLayout>
    </div>
  );
};

export default App;
