import React from "react";
import {IndexRoute, Router, Route} from "react-router"; 
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
  <Route path='/' component= {Main}>
    <IndexRoute component= {Summary} />
    <Route path='/photo' component= {Photo} />
    <Route path='/contact' component= {Contact} />
    <Route path='/form' component= {Form} />
    <Route path='/portfolio' component= {Portfolio} />
    <Route path='/resume' component= {Resume} />
    <Route path='/media' component= {Media} />
    <Route path='/project' component= {Project} />
  </Route>
)
