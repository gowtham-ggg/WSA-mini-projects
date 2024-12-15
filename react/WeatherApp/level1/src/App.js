import DefaultScreen from "./components/DefaultScreen";
import "../src/style/index.css"
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
function App() {
  return (
    <div className="app">
      <Header/>
      <DefaultScreen/>
      <SearchResult/>
    </div>
  );
}

export default App;
