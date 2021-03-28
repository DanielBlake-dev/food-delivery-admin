import React from "react";

import { Switch, Route } from "react-router-dom";

import { Auth } from "./pages/Auth";
import { MainPage } from "./pages/Main";
import { Registation } from "./pages/Registation";
import { CompletedDeliveringPage } from "./pages/CompletedDelivering";
import { DishesPage } from "./pages/Dishes";
import { DishesCreatePage } from "./pages/DishesCreate";
import { IngredientsCreatePage } from "./pages/IngredientsCreate";
import { IngredientsPage } from "./pages/Ingredients";

// @ts-ignore
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Auth} />
        <Route exact path='/registration' component={Registation} />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/delivered' component={CompletedDeliveringPage} />
        <Route exact path='/dishes' component={DishesPage} />
        <Route exact path='/dishes/create' component={DishesCreatePage} />
        <Route exact path='/ingredients/' component={IngredientsPage} />
        <Route
          exact
          path='/ingredients/create'
          component={IngredientsCreatePage}
        />
      </Switch>

      <NotificationContainer />
    </>
  );
};

export default App;
