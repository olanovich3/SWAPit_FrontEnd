import './App.css';

import { Outlet } from 'react-router-dom';

import GeneralLayout from './layout/GeneralLayout';
import Button from './ui-components/Button';
import DivFlex from './ui-components/DivFlex';
import Footer from './ui-components/Footer';
import Header from './ui-components/Header';

const App = () => {
  return (
    <div className="App">
      <GeneralLayout>
        <Header align={'flex-end'} height={'10vh'} justify={'center'}>
          <DivFlex padding={'20px'} margin={'20px'} gap={'2rem'}>
            <h3>Register</h3>
            <h3>Login</h3>
            <Button className={'principal'} text={'Crear producto'}></Button>
            <Button
              className={'secondary'}
              bg={'second'}
              color={'second'}
              text={'Crear producto'}
              border={'yes'}
            ></Button>
          </DivFlex>
        </Header>
        <Outlet />
        <Footer />
      </GeneralLayout>
    </div>
  );
};

export default App;
