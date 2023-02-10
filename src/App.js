import "./App.css";
import Main from "./components/Main/Main";
import Blog from "./components/blog/Blog";
import Work from "./components/work/Work";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/blog" component={Blog} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
