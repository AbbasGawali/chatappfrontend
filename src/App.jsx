import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div data-theme="light">
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App;
