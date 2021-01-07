import { Route } from "react-router-dom"

import ItemListContainer from "./containers/ItemListContainer"
import ItemRegisterContainer from "./containers/ItemRegisterContainer"
import ItemModifyContainer from "./containers/ItemModifyContainer"
import ItemReadContainer from "./containers/ItemReadContainer"

import "./App.css"

function App() {
  return (
    <div class="main-bg-wrapper">
      <div class="main-bg"></div>
      <div class="main-container">
        <Route component={ItemListContainer} path="/" exact />
        <Route component={ItemRegisterContainer} path="/create" exact />
        <Route component={ItemModifyContainer} path="/edit/:itemId" exact />
        <Route component={ItemReadContainer} path="/read/:itemId" exact />
      </div>
    </div>
  );
}

export default App;
