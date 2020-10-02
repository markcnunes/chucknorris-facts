import React from "react";
import Message from "./components/Message";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
