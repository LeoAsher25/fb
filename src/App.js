import HomePage from "./components/HomePage";
import TopNav from "./components/TopNav";
import PostsContextProvider from "./contexts/PostsContextProvider";

// import themeContextProvider
import ThemeContextProvider from "./contexts/ThemeContextProvider";

// import router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   document.addEventListener("copy", function (e) {
  //     const text_only = document.getSelection().toString();
  //     const clipdata = e.clipboardData || window.clipboardData;
  //     clipdata.setData("text/plain", text_only);
  //     clipdata.setData("text/html", text_only);
  //     e.preventDefault();
  //   });
  // }, []);
  return (
    <div className="app">
      <ThemeContextProvider>
        <Router>
          <TopNav />

          <Switch>
            <Route exact path="/friends">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: "10rem",
                  color: "red",
                }}
              >
                Friends
              </h1>
            </Route>

            <Route path="/pages">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: "10rem",
                  color: "red",
                }}
              >
                Pages
              </h1>
            </Route>

            <Route path="/watch">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: "10rem",
                  color: "red",
                }}
              >
                Watch
              </h1>
            </Route>

            <Route path="/groups">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: "10rem",
                  color: "red",
                }}
              >
                Groups
              </h1>
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
