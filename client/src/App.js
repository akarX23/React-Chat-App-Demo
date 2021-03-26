import { BrowserRouter, Route } from "react-router-dom";
import Chat from "./Components/Chat/Chat";
import Join from "./Components/Join/Join";
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/chat" exact component={Chat} />
      <Route path="/" exact component={Join} />
    </BrowserRouter>
  );
}

export default App;
