import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main/Main";
// import Summary from "./components/Summary/Summary";
// import Photo from "./components/Photo/Photo";
// import Contact from "./components/Contact/Contact";
// import Form from "./components/Form/Form";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Resume from "./components/Resume/Resume";
// import Media from "./components/Media/Media";
// import Project from "./components/Project/Project";


export default (
  <Router>
    <Route path='/' component={Main}>
      {/* <Route exact path= '/' component={Summary} />
      <Route path='/Photo' component= {Photo} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Form' component={Form} />
      <Route path='/Portfolio' component={Portfolio} />
      <Route path='/Resume' component={Resume} />
      <Route path='/Media' component={Media} />
      <Route path='/Project' component={Project} /> */}
    </Route>
  </Router>
)
