import React, { useState } from 'react';
import './App.css'

import Intro from './components/Intro'
import SocialBar from './components/SocialBar';
import TaskBar from './components/TaskBar';
import Loading from './components/Loading'
import Projects from './components/Projects'
import ProjectPage from './components/Projects/ProjectPage'
import SideBar from './components/SideBar'
//import projects data as shortProjects 
import shortProjects from './components/Projects/ProjectData.js';
import Resume from './components/Resume'
import Contact from './components/Contact'

//react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  const [isIntroDone, setIsIntroDone] = useState(false);
  const [loading, setLoading] = useState(false);


  const styles = {
    container: {
      //display: 'flex',
      display: 'inline-grid',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      textAlign: 'center',
      fontSize: '1em',
      zIndex: 10,
      height: '100vh',
      width: '100%',
      gridTemplateRows: '60% 40%'
    }
  }


  const handleIsIntroDone = () => {
    setIsIntroDone(true)
  }

  const handleLoading = (history, path) => {
    setLoading(true);
    setTimeout(() => {
      history.push(path);
    }, 1000)
  }

  const handleProjectUrl = (props) => {

    if (props.match.params.name === undefined) { //if url has no queries, render main project page
      return (
        <React.Fragment>
          <SideBar loading={handleLoading} />
          <Projects loading={handleLoading} data={Object.keys(shortProjects).map(name => ({ url: shortProjects[name].url, title: shortProjects[name].title, img: shortProjects[name].img[0], description: shortProjects[name].displayDescription }))} />
        </React.Fragment>
      )
    } else if (props.match.params.catchall) { //if catchall parameter is received, redirect to path /projects/{name}
      return <Redirect to={`/projects/` + props.match.params.name} />
    } else {
      if (shortProjects && shortProjects[props.match.params.name]) { // if name received in params match a project
        return <React.Fragment>
          <ProjectPage loading={handleLoading} data={shortProjects[props.match.params.name]} />
        </React.Fragment>
      } else { //if name doesnt match
        //project doesnt exist, redirect to /projects
        return <Redirect to={`/projects`} />
      }
    }

  }

  return (
    <Router >
      {loading && <Loading onEnd={() => { setLoading(false) }} />}
      <section style={styles.container}>
        <SocialBar />
        <Switch>

          {/* Handle project routes */}
          <Route path="/projects/:name?/:catchall?" render={handleProjectUrl} />

          {/* handle home path */}
          <Route exact path="/resume">
            <SideBar loading={handleLoading} />
            <Resume />
          </Route>

          {/* handle home path */}
          <Route exact path="/contact">
            <SideBar loading={handleLoading} />
            <Contact />
          </Route>

          {/* handle home path */}
          <Route path="/">
            <Intro effectEnded={handleIsIntroDone} />
            {isIntroDone &&
              <TaskBar loading={handleLoading} />
            }
          </Route>

        </Switch>
      </section>

    </Router>
  );
}
export default App;
