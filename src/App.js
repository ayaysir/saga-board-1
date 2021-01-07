import { Route } from "react-router-dom"

import ItemListContainer from "./containers/ItemListContainer"
import ItemRegisterContainer from "./containers/ItemRegisterContainer"
import ItemModifyContainer from "./containers/ItemModifyContainer"
import ItemReadContainer from "./containers/ItemReadContainer"

function App() {
  return (
    <>
      <Route component={ItemListContainer} path="/" exact />
      <Route component={ItemRegisterContainer} path="/create" exact />
      <Route component={ItemModifyContainer} path="/edit/:itemId" exact />
      <Route component={ItemReadContainer} path="/read/:itemId" exact />
    </>
  );
}

export default App;
