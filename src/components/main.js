import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './homepage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;