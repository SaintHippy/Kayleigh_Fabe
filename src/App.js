import { Route, Routes, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./utils/UserContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
