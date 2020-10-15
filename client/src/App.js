import React, { useState, useEffect } from 'react';
import './App.css'


import Intro from './components/Intro'
import SocialBar from './components/SocialBar';
import TaskBar from './components/TaskBar';
import Loading from './components/Loading'
import Projects from './components/Projects'
import ProjectPage from './components/Projects/ProjectPage'
import SideBar from './components/SideBar'
//import projects data as shortProjects 
import { shortProjects, ownerInfo, domain } from './setup/ProjectData.js';
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
        console.log('running here once')
        //set metatags for this project
        metaTags(props.match.params.name);
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

  const metaTags = (type = 'machinerypal') => {

    // switch(type){
    //   //for home
    //   case (type==='/'):

    //   //for contact
    //   case (type==='/contact'):

    //   //for resume
    //   case (type==='/resume'):

    //   //for projects page
    //   case (type==='/projects'):

    //   //for specific projects
    //   default:
    // }
    let meta
    if (type === 'general') {
      //GENERAL

      //removing old tags
      document.querySelector("[name='title']") && document.querySelector("[name='title']").remove();
      document.querySelector("[name='description']") && document.querySelector("[name='description']").remove();
      document.title = ownerInfo.name + ownerInfo.title;
      meta = document.createElement('meta');
      //primary meta tag
      meta.name = 'title';
      meta.content = ownerInfo.name + ' ' + ownerInfo.title;
      document.getElementsByTagName('head')[0].append(meta);
      meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = shortProjects[type] ? shortProjects[type].main.description : 'Projects';
      document.getElementsByTagName('head')[0].append(meta);

      //OG / FB

      //removing old tags
      document.querySelector("[name='og:type']") && document.querySelector("[name='og:type']").remove();
      document.querySelector("[name='og:url']") && document.querySelector("[name='og:url']").remove();
      document.querySelector("[name='og:title']") && document.querySelector("[name='og:title']").remove();
      document.querySelector("[name='og:description']") && document.querySelector("[name='og:description']").remove();
      document.querySelector("[name='og:image']") && document.querySelector("[name='og:image']").remove();

      //first
      meta = document.createElement('meta');
      meta.name = 'og:type';
      meta.setAttribute('property', 'og:type');
      meta.content = 'website';
      document.getElementsByTagName('head')[0].append(meta);
      //second
      meta = document.createElement('meta');
      meta.name = 'og:url';
      meta.setAttribute('property', 'og:url');
      meta.content = domain;
      document.getElementsByTagName('head')[0].append(meta);
      //third
      meta = document.createElement('meta');
      meta.name = 'og:title';
      meta.setAttribute('property', 'og:title');
      meta.content = ownerInfo.name + ' ' + ownerInfo.title
      document.getElementsByTagName('head')[0].append(meta);
      //fourth
      meta = document.createElement('meta');
      meta.name = 'og:description';
      meta.setAttribute('property', 'og:description');
      meta.content = ownerInfo.description;
      document.getElementsByTagName('head')[0].append(meta);
      //fourth
      meta = document.createElement('meta');
      meta.name = 'og:image';
      meta.setAttribute('property', 'og:image');
      meta.content = 'https://www.alexcode.io/logo512.png';
      document.getElementsByTagName('head')[0].append(meta);

      //TWITTER

      //removing old tags
      document.querySelector("[name='twitter:card']") && document.querySelector("[name='twitter:card']").remove();
      document.querySelector("[name='twitter:url']") && document.querySelector("[name='twitter:url']").remove();
      document.querySelector("[name='twitter:title']") && document.querySelector("[name='twitter:title']").remove();
      document.querySelector("[name='twitter:description']") && document.querySelector("[name='twitter:description']").remove();
      document.querySelector("[name='twitter:image']") && document.querySelector("[name='twitter:image']").remove();

      //first
      meta = document.createElement('meta');
      meta.name = 'twitter:card';
      meta.setAttribute('property', 'twitter:card');
      meta.content = 'summary_large_image';
      document.getElementsByTagName('head')[0].append(meta);
      //second
      meta = document.createElement('meta');
      meta.name = 'twitter:url';
      meta.setAttribute('property', 'twitter:url');
      meta.content = domain;
      document.getElementsByTagName('head')[0].append(meta);
      //third
      meta = document.createElement('meta');
      meta.name = 'twitter:title';
      meta.setAttribute('property', 'twitter:title');
      meta.content = ownerInfo.name + ' ' + ownerInfo.title;
      document.getElementsByTagName('head')[0].append(meta);
      //fourth
      meta = document.createElement('meta');
      meta.name = 'twitter:description';
      meta.setAttribute('property', 'twitter:description');
      meta.content = ownerInfo.description;
      document.getElementsByTagName('head')[0].append(meta);
      //fourth
      meta = document.createElement('meta');
      meta.name = 'twitter:image';
      meta.setAttribute('property', 'twitter:image');
      meta.content = 'https://www.alexcode.io/logo512.png';
      document.getElementsByTagName('head')[0].append(meta);

      return
    }

    //GENERAL

    //removing old tags
    document.querySelector("[name='title']") && document.querySelector("[name='title']").remove();
    document.querySelector("[name='description']") && document.querySelector("[name='description']").remove();
    document.title = shortProjects[type] ? shortProjects[type].main.title : 'Projects';
    meta = document.createElement('meta');
    //primary meta tag
    meta.name = 'title';
    meta.content = shortProjects[type] ? shortProjects[type].main.title : 'Projects';
    document.getElementsByTagName('head')[0].prepend(meta);
    meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = shortProjects[type] ? shortProjects[type].main.description : 'Projects';
    document.getElementsByTagName('head')[0].prepend(meta);

    //OG / FB

    //removing old tags
    document.querySelector("[name='og:type']") && document.querySelector("[name='og:type']").remove();
    document.querySelector("[name='og:url']") && document.querySelector("[name='og:url']").remove();
    document.querySelector("[name='og:title']") && document.querySelector("[name='og:title']").remove();
    document.querySelector("[name='og:description']") && document.querySelector("[name='og:description']").remove();
    document.querySelector("[name='og:image']") && document.querySelector("[name='og:image']").remove();

    //first
    meta = document.createElement('meta');
    meta.name = 'og:type';
    meta.setAttribute('property', 'og:type');
    meta.content = 'website';
    document.getElementsByTagName('head')[0].prepend(meta);
    //second
    meta = document.createElement('meta');
    meta.name = 'og:url';
    meta.setAttribute('property', 'og:url');
    meta.content = shortProjects[type] ? domain + shortProjects[type].url : 'https://www.alexcode.io';
    document.getElementsByTagName('head')[0].prepend(meta);
    //third
    meta = document.createElement('meta');
    meta.name = 'og:title';
    meta.setAttribute('property', 'og:title');
    meta.content = shortProjects[type] ? shortProjects[type].main.title : 'Projects';
    document.getElementsByTagName('head')[0].prepend(meta);
    //fourth
    meta = document.createElement('meta');
    meta.name = 'og:description';
    meta.setAttribute('property', 'og:description');
    meta.content = shortProjects[type] ? shortProjects[type].main.description : 'Check how to build a portfolio like this from https:www.alexcode.io';
    document.getElementsByTagName('head')[0].prepend(meta);
    //fourth
    meta = document.createElement('meta');
    meta.name = 'og:image';
    meta.setAttribute('property', 'og:image');
    meta.content = shortProjects[type] ? domain + shortProjects[type].main.image.replace('../', '/').replace('./', '/') : 'Check how to build a portfolio like this from https:www.alexcode.io';
    document.getElementsByTagName('head')[0].prepend(meta);

    //TWITTER

    //removing old tags
    document.querySelector("[name='twitter:card']") && document.querySelector("[name='twitter:card']").remove();
    document.querySelector("[name='twitter:url']") && document.querySelector("[name='twitter:url']").remove();
    document.querySelector("[name='twitter:title']") && document.querySelector("[name='twitter:title']").remove();
    document.querySelector("[name='twitter:description']") && document.querySelector("[name='twitter:description']").remove();
    document.querySelector("[name='twitter:image']") && document.querySelector("[name='twitter:image']").remove();

    //first
    meta = document.createElement('meta');
    meta.name = 'twitter:card';
    meta.setAttribute('property', 'twitter:card');
    meta.content = 'summary_large_image';
    document.getElementsByTagName('head')[0].prepend(meta);
    //second
    meta = document.createElement('meta');
    meta.name = 'twitter:url';
    meta.setAttribute('property', 'twitter:url');
    meta.content = shortProjects[type] ? domain + shortProjects[type].url : 'https://www.alexcode.io';
    document.getElementsByTagName('head')[0].prepend(meta);
    //third
    meta = document.createElement('meta');
    meta.name = 'twitter:title';
    meta.setAttribute('property', 'twitter:title');
    meta.content = shortProjects[type] ? shortProjects[type].main.title : 'Projects';
    document.getElementsByTagName('head')[0].prepend(meta);
    //fourth
    meta = document.createElement('meta');
    meta.name = 'twitter:description';
    meta.setAttribute('property', 'twitter:description');
    meta.content = shortProjects[type] ? shortProjects[type].main.description : 'Check how to build a portfolio like this from https:www.alexcode.io';
    document.getElementsByTagName('head')[0].prepend(meta);
    //fourth
    meta = document.createElement('meta');
    meta.name = 'twitter:image';
    meta.setAttribute('property', 'twitter:image');
    meta.content = shortProjects[type] ? domain + shortProjects[type].main.image.replace('../', '/').replace('./', '/') : 'Check how to build a portfolio like this from https:www.alexcode.io';
    document.getElementsByTagName('head')[0].prepend(meta);



    // <!-- Twitter -->
    // <meta property="twitter:card" content="summary_large_image">
    // <meta property="twitter:url" content="https://metatags.io/">
    // <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
    // <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
    // <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
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
          <Route path="/" render={() => {
            metaTags('general');
            return <React.Fragment>
              <Intro effectEnded={handleIsIntroDone} />
              {isIntroDone &&
                <TaskBar loading={handleLoading} />

              }
            </React.Fragment>
          }
          }>
          </Route>

        </Switch>
      </section>

    </Router>
  );
}
export default App;
