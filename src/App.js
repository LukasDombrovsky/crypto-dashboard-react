import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./components/UI/NavigationBar";
import MainPage from "./components/pages/MainPage";
import Forecast from "./components/pages/Forecast";
import Section from "./components/UI/Section";
import Footer from "./components/pages/Footer";
import useHttp from "./hooks/use-http";

import "./App.scss";

function App() {
  const [data, setData] = useState();
  const { isLoading, error, sendRequest: getData } = useHttp();

  useEffect(() => {
    const transformData = (dataObj) => {
      setData(dataObj);
    };

    getData(
      {
        url: "https://crypto-dashboard-react-default-rtdb.firebaseio.com/forecast.json",
      },
      transformData
    );
  }, [getData]);

  return (
    <>
      <NavigationBar
        brand="Crypto Dashboard"
        homeLink="root"
        links={["forecast", "contact"]}
        expand="md"
        colors={{
          notScrolled: { backgroundColor: "#282828", textColor: "white" },
          scrolled: { backgroundColor: "white", textColor: "#282828" },
        }}
        activeTextColor="#18BC9C"
      />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <MainPage />
        </Route>
        <Route path="/forecast">
          <Forecast
            forecast={data}
            isLoading={isLoading}
            error={error}
            getData={getData}
          />
        </Route>
      </Switch>
      <Section id="contact" backgroundColor="black" narrow-width>
        <Footer />
      </Section>
    </>
  );
}

export default App;
