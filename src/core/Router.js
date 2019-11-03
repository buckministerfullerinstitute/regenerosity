import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

// Pages
import Homepage from "../components/HomePage";
import Projects from "../components/ProjectsPage";
import NotFound from "../components/NotFoundPage";
import { ProjectDetailPage } from "../components/ProjectDetailPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/project-detail/:id" component={ProjectDetailPage} />
      <Route exact path="/" component={Homepage} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
