import './App.css';
import Banner from './components/Banner.js'
import Poster from './components/Poster';
import UserInformation from './components/UserInformation';
import UserNameAvatar from './components/UserNameAvatar';
import Donate from './components/Donate';
import UserComment from './components/UserComment';


function App() {
  return (
    <div className="App">
     <Banner></Banner>
     <Poster></Poster>
     <UserNameAvatar></UserNameAvatar>
     <UserInformation></UserInformation>
     <Donate></Donate>
     <UserComment></UserComment>
     
    </div>
  );
}

export default App;