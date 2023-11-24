import './App.css';
import PlayerContainer from './Components/ReactPlayer';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app">
      <h1> Test out Video Player </h1>
      <Sidebar />
      <PlayerContainer />
    </div>
  );
}

export default App;

const app = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
