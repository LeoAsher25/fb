import HomePage from "./components/HomePage";
import TopNav from "./components/TopNav";
import PostsContextProvider from "./contexts/PostsContextProvider";

// import themeContextProvider
import ThemeContextProvider from "./contexts/ThemeContextProvider";

// import router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <Router>
          <TopNav />

          <Switch>
            <Route exact path="/friends">
              <h1>friends</h1>
            </Route>
            <Route path="/groups">
              <h1>groups</h1>
            </Route>

            <Route exact path="/">
              <PostsContextProvider>
                <HomePage />
              </PostsContextProvider>
            </Route>
          </Switch>
        </Router>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
