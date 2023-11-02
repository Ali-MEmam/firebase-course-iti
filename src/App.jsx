import "./App.scss";
import { ChatView, Login } from "./layout";

function App() {
  return <div className="app">{false ? <ChatView /> : <Login />}</div>;
}
export default App;
