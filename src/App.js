import Header from "./components/header/Header"

import "./styles/style.scss"
import First from "./components/first/first";
import Second from "./components/second/second";
import Bar from "./components/bar/bar";
import Family from "./components/family/family";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="App">
       <Header/>
       <main>
          <First/>
          <Second/>
          <Bar/>
          <Family/>
          <Test/>
       </main>
    </div>
  );
}

export default App;
