import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <h1>Navbar</h1>
      </Navbar>
    </div>
  );
}

const Navbar = styled.nav`
  width: 100%;
  padding: 0;
  h1 {
    padding: 0;
    margin: 0;
  }
`

export default App;
