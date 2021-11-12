import "./App.css";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact" exact component={Contact} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/posts/:post_id" exact component={Post} />
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
