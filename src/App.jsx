import './App.css';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import GeneralLayout from './layout/GeneralLayout';
import DivFlex from './ui-components/DivFlex';
import Header from './ui-components/Header';
const App = () => {
  return (
    <div className="App">
      <GeneralLayout>
        <Header align={'flex-end'} height={'10vh'} justify={'center'}>
          <DivFlex padding={'20px'} margin={'20px'} gap={'2rem'}>
            <h3>Register</h3>
            <h3>Login</h3>
          </DivFlex>
        </Header>
        <Outlet />
        <Footer></Footer>
      </GeneralLayout>
    </div>
  );
};

export default App;
