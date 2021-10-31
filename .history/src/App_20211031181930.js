import logo from './logo.svg';
import styled from 'styled-components';
import { Zap } from '@styled-icons/octicons'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <h1>Navbar</h1>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

const RedZap = styled(Zap)`
color:red;`
const Navbar = styled.nav`
  width: 100%;
  padding: 0;
  h1 {
    padding: 0;
    margin: 0;
  }
`

export default App;
