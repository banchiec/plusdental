import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar>
          <h1>Navbar</h1>
        </Navbar>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

const Navbar = styled.nav`
  width: 100px;
  height: 200px;
  border: 1px solid green;
`

export default App;
