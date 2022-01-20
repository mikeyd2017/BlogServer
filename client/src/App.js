import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import USER from './utilities/User';

import { useState, useEffect } from 'react';

import './Styles/reset.scss';

function App() {

  const [userState, setUserState] = useState({
    name: '',
    age: '',
    email: ''
  });
  
  useEffect(() => {
    USER.getUser('61e711cb9139f4b16c893b0b').then(data => {
        setUserState((userState) => ({
            ...userState,
            name: data.user.name,
            age: data.user.age,
            email: data.user.email
        }));
    });
  }, []);

  return (
      <div style={{display: 'flex', height: '100vh'}}>
        <Sidebar user={userState}></Sidebar>
        <Main name={userState.name}></Main>
      </div>
  );
}

export default App;
