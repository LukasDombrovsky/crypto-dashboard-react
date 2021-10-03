import { Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./UI/NavigationBar";
import MainPage from "./Components/MainPage";
import Forecast from "./Components/Forecast";

import "./App.scss";

function App() {
  return (
    <>
      <NavigationBar
        brand="Crypto Dashboard"
        homeLink="root"
        links={["forecast"]}
        colors={{
          static: { backgroundColor: "#282828", textColor: "white" },
          dynamic: { backgroundColor: "white", textColor: "#282828" },
        }}
      />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/forecast" component={Forecast} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}

export default App;
