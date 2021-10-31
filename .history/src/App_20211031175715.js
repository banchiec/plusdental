import logo from './logo.svg';
import styled from 'styled-components';
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

const Navbar = styled.nav`
  width: 100%;
  height: 10px;
  border: 1px solid green;
`

export default App;
