import "./App.css";
import ContexApi from "./components/ContexApi";
import CounterRedex from "./components/CounterRedex.jsx";
import { ThemeProvider } from "./components/ThemeProvider";
import TodoRedex from "./components/TodoRedex.jsx";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";

import store from "./store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <UseState/>

      {/* <UseEffect /> */}

      {/* step 2 : wrapping the compnent with the contexapi */}
      {/* <ThemeProvider>
          <ContexApi  name={'vipin'} />
      </ThemeProvider> */}

      {/* <Provider store={store}> 
      <TodoRedex/>
      <CounterRedex/>
      </Provider> */}


    </div>
  );
}

export default App;
