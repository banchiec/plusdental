import logo from './logo.svg';
import styled from 'styled-components';
import { Zap } from '@styled-icons/octicons'
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

const RedZap = styled(Zap)`
  color:red;
  width: 30px;
`

export default App;
