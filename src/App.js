import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import SignIn from "./components/SignIn/SignIn";
import loader from "./images/loading.svg";
import SignOut from "./components/SignOut/SignOut";
import chat from "./images/chat.png";
import GithubRibbon from "./components/GitHubRibbon.js/GitHubRibbon";
function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <img className="loader" src={loader} alt="loading..." />;
  }
  return (
    <>
      <GithubRibbon />
      <div className="App">
        <header className="header">
          <img src={chat} alt="logo" />
          <h1>Chatify</h1>
          <SignOut />
        </header>

        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </div>
    </>
  );
}

export default App;
