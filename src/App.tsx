import './App.css';
import './index.css'
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Navbar from './components/Navbar';
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20"> {/* This pushes everything below the fixed navbar */}
        <h1>ResumeReady</h1>
        <LoginButton />
        <LogoutButton />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
