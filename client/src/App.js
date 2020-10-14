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
import { shortProjects } from './components/Projects/ProjectData.js';
import Resume from './components/Resume'
import Contact from './components/Contact'

//custom hooks
import useWindowsSize from './hooks/Dimms/useWindowSize'


//react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


function App() {
  const [width, height] = useWindowsSize();
  const [isIntroDone, setIsIntroDone] = useState(false);
  const [loading, setLoading] = useState(false);

  //move social bar to the middle when clicking menu button on mobile
  const [moveSocial, setMoveSocial] = useState(false);
  const [centerSocial, setCenterSocial] = useState(false);


  const styles = {
    container: {
      //display: 'flex',
      position: 'fixed',
      display: 'inline-grid',
      alignItems: 'center',
      justifyContent: 'center',
      //overflow: 'hidden',
      textAlign: 'center',
      fontSize: '1em',
      height: '100%',
      //minHeight: '-webkit-fill-available',
      width: '100%',
      gridTemplateRows: '60% 40%',
      zIndex: 1,
    },
  }


  const handleIsIntroDone = () => {
    setIsIntroDone(true)

  }

  const handleLoading = (history, path) => {
    //reset social bar location
    setMoveSocial(false);
    setCenterSocial(false);
    setLoading(true);
    setTimeout(() => {
      history.push(path);
    }, 1000)
  }

  //move social will move socialbar base on the current page view
  const moveSocialBarMobile = () => {
    setMoveSocial(!moveSocial);
  }

  //center social will center the social bar when scroll down to contact section on the project page 
  const centerSocialBar = (option = false) => {
    setCenterSocial(option);
  }

  const handleProjectUrl = (props) => {

    if (props.match.params.name === undefined) { //if url has no queries, render main project page
      return (
        <React.Fragment>
          <SideBar loading={handleLoading} moveSocial={moveSocialBarMobile} />
          <Projects loading={handleLoading} data={Object.keys(shortProjects).map(name => ({ url: shortProjects[name].url, title: shortProjects[name].main.title, img: shortProjects[name].main.image, description: shortProjects[name].main.description }))} />
        </React.Fragment>
      )
    } else if (props.match.params.catchall) { //if catchall parameter is received, redirect to path /projects/{name}
      return <Redirect to={`/projects/` + props.match.params.name} />
    } else {
      if (shortProjects && shortProjects[props.match.params.name]) { // if name received in params match a project
        return <React.Fragment>
          <ProjectPage loading={handleLoading} data={shortProjects[props.match.params.name]} centerSocialBar={centerSocialBar} />
          {/* show mobile menu button on project page when  width is less than 980*/}
          {width <= 980 &&
            <SideBar loading={handleLoading} moveSocial={moveSocialBarMobile} />
          }
        </React.Fragment>
      } else { //if name doesnt match
        //project doesnt exist, redirect to /projects
        return <Redirect to={`/projects`} />
      }
    }

  }


  return (
    <Router >
      <section style={styles.container}>
        {loading && <Loading onEnd={() => { setLoading(false) }} />}
        <SocialBar trigger={moveSocial} center={centerSocial} />
        <Switch>

          {/* Handle project routes */}
          <Route path="/projects/:name?/:catchall?" render={handleProjectUrl} />

          {/* handle home path */}
          <Route exact path="/resume">
            {/* <Redirect to={`/CV%20JULY%202020.pdf`} /> */}
            <SideBar loading={handleLoading} moveSocial={moveSocialBarMobile} />
            <Resume />
          </Route>

          {/* handle home path */}
          <Route exact path="/contact">
            <SideBar loading={handleLoading} moveSocial={moveSocialBarMobile} />
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
