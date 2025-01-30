import './App.css';
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>ResumeReady</h1>
      <LoginButton />
      <LogoutButton />
      <UserProfile />
    </div>
  );
}

export default App;
