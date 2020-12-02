import React from "react";
import { Router, Route } from "react-router";
import Main from "./components/Main";
import Summary from "./components/Summary";
import Photo from "./components/Photo";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Media from "./components/Media";
import Project from "./components/Project";


export default (
  <Router>
    <Route path='/' component={Main}>
      <Route exact path= "/" component={Summary} />
      <Route path='/Photo' component={Photo} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Form' component={Form} />
      <Route path='/Portfolio' component={Portfolio} />
      <Route path='/Resume' component={Resume} />
      <Route path='/Media' component={Media} />
      <Route path='/Project' component={Project} />
    </Route>
  </Router>
)
