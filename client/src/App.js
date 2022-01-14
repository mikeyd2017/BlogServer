import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

import './Styles/reset.scss';


function App() {
  return (
      <div style={{display: 'flex', height: '100vh'}}>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
  );
}

export default App;
