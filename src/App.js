import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/searchBar';
import Hero from './components/Hero'
import TabletLayout from './components/TabletLayout';
import HealthLayout from './components/HealthLayout';
import HomeLayout from './components/HomeLayout';

function App() {
  return (
    <div className="App">
     <Header />
     <SearchBar />
     <Hero />
     <TabletLayout />
     <HealthLayout />
     <HomeLayout/>
    </div>
  );
}

export default App;
