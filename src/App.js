
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

/*componentes da ASP*/
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

/*const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static())
}
app.listen(port, (err) =>{
  if (err) return console.log(err);
  console.log('Server running on port: ', port)
})*/ 

export default App;
