import HomePage from "./components/HomePage";
import TopNav from "./components/TopNav";
import PostsContextProvider from "./contexts/PostsContextProvider";

// import themeContextProvider
import ThemeContextProvider from "./contexts/ThemeContextProvider";

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <PostsContextProvider>
          <TopNav />
          <HomePage />
        </PostsContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
