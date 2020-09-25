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

//react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
    }, 1200)
  }

  return (
    <Router >
      {loading && <Loading onEnd={() => { setLoading(false) }} />}
      <section style={styles.container}>
        <SocialBar />
        <Switch>
          <Route exact path="/">
            <Intro effectEnded={handleIsIntroDone} />
            {isIntroDone &&
              <TaskBar loading={handleLoading} />
            }
          </Route>
          <Route exact path="/projects" >
            <SideBar loading={handleLoading} />
            <Projects loading={handleLoading} />
          </Route>
          <Route exact path="/projects/machinerypal" >
            <ProjectPage loading={handleLoading} data={shortProjects && shortProjects['machinerypal'] && shortProjects['machinerypal']} />
          </Route>
          <Route exact path="/projects/katena" >
            <ProjectPage loading={handleLoading} data={shortProjects && shortProjects['katena'] && shortProjects['katena']} />
          </Route>

        </Switch>
      </section>

    </Router>
  );
}
export default App;
