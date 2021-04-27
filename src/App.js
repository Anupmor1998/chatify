import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import SignIn from "./components/SignIn/SignIn";
function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header"></header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
