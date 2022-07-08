import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu'


function App() {
  return (
    <div className="App">
      <SideMenu />
      <div style={{paddingLeft: '320px'}}>
          <Header />
      </div>
    </div>
  );
}

export default App;
