## `Portfolio for All!`

Easily customizable, Click here to see the [Live version](https://www.alexcode.io).<br/>
Check all the components used in this portfolio [Here](https://github.com/buddyeorl/portfolio/tree/master/client/src/components).<br/>
Check all the effects used in this portfolio [Here](https://github.com/buddyeorl/portfolio/tree/master/client/src/effects).<br/>
Check all the hooks used in this portfolio [Here](https://github.com/buddyeorl/portfolio/tree/master/client/src/hooks).<br/>
Check the setup file [Here](https://github.com/buddyeorl/portfolio/tree/master/client/src/setup).

### `Clone`

you can download this repo [Here](https://github.com/buddyeorl/portfolio/archive/master.zip)

or you can clone it:
```
git clone https://github.com/buddyeorl/portfolio.git
```

### `installing the modules and packages`
from inside the root directory (i.e. where package.json is located)

```
npm install && cd client && npm install
```

### `Setup`

To create your own portfolio with your own projects and information, you need to modify the setup file located at %projectRoot/client/setup/ProjectData.js

### `Custom components`
if you want to showcase custom components, you can import them at the top of the `ProjectData.js`,
see Project information below how to render them in your project page 

### `Developer's contact and general information`

Modify the object `ownerInfo` with your information, see example:

``` javascript
const ownerInfo = {
    name: 'Alex Lizarraga',
    title: 'Full Stack Developer',
    description: `Full stack developer & entrepreneur \nReactJS, Native, NodeJS, JS, Python and more`,
    introMessage: ['Hi, I\'m Alex Lizarraga', 'I like building things that are functional,simple and easy to use.'], // Will type one line per index.
    socialAccounts: {
        github: { label: 'buddyeorl', url: 'https://github.com/buddyeorl' },
        linkedin: { label: 'alizarraga', url: 'https://www.linkedin.com/in/alizarraga/' },
        twitter: { label: 'A_Lizar', url: 'https://twitter.com/A_Lizar' },
        facebook: { label: 'alexander.lizarraga.144', url: 'https://www.facebook.com/alexander.lizarraga.144' }
    }
}
```
**Note1: `introMessage1` uses a custom react component for type style effect, each index will be render as a different line simulating the `enter` keystroke.**<br />
**Note2: `socialAccounts` is required as the example above. if you have different accounts, you need to modify the component that renders this data at `client/components/SocialBar` to accept other accounts**<br />

### `Projects Information`

This project uses the object `shortProjects` to render the project list and to render each single project, it uses the following properties:

* `url` : string <- local path to be used to access this project, always starts with `/projects/`
* `main`: object <- hold the information display in the thumbnail and the main project page:
    * ` title`: string <- your title while working at this project
    * `duty`: string<- your duties while working at this project
    * `description`: string <- short description used for the project thumbnail
    * `content`: string<- short description used for the project page main section
    * `image`:string <- url or local path to the image to be display for the thumbnail and next to the content at the project page
* `images`:Array[ strings ] <- array holding the urls for all the image you want to display as individual component on the page project.
* `paragraph`:Array[ objects ] <- array of object with each paragraph you want to display as individual component, each object has this shape:
    * `title`: string - optional <- shows a title before the paragraph content
    * `content`:string <- paragraph content
* `technologies`: Array[ strings ] <- all the technologies used on this project.
* `code`: Array[ objects ] <- array of objects to display as code snippets in the project page:
    * `title`: string - optional <- optional title to display at the top of the code snippet
    * `url`: string <- URL of the Github Gist, [How to make a Github Gist](https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/creating-gists)
* `link`:string <- URL of the live project, homepage, demo, etc.
* `reference`:Array[ objects ] <- Array of object with all the one sentence references with url links, will render as a p tag with an a tag and a label for the a tag.
    * `content`: string <- short explanation of the link (e.g. see the code [here])
    * `label`:string <-label to use for the a tag
    * `url`: string <- url for this reference
* `component`: Array[ React component or plain html component]<- Array with all the components you want to demo in your projects, it accepts functional components too.
** the order property indicates in which order will the components be rendered
* `order`: Array[ objects ] <- order of how the components will be rendered after the main section
    * `type`: enum <- represents the type of component to render, options(code, paragraph, reference, link, technologies, images, component)
    * `index`: int <- if the type is an array, the index is required

example of a portfolio with one project and few components:

```javascript
//THE CONTENT IN THIS FILE WILL BE USED TO RENDER THE PROJECTS IN THE PROJECT SECTION ALONG WITH THE PROJECT DATA ITSELF

import SearchBar from '../ProjectComponents/SearchBar'

// the key used for the property should be the same used as the last part in the url, 
//INCORRECT SETUP:
// 'brands-api':{
//    url:'/projects/brandsApi', <====INCORRECT SETUP
//    ... more keys here
//  }

//CORRECT SETUP:
// 'brands-api':{
//    url:'/projects/brands-api', <====CORRECT SETUP
//    ... more keys here
//  }

const shortProjects = {
       'brands-api': {
        url: '/projects/brands-api',
        
        //THIS KEY WILL BE USED FOR THE MAIN CONTENT SECTION ON THE PROJECT PAGE
        main: {
            title: 'Brands API',
            duty: 'Back End Developer',
            description: 'NodeJS Lightweight and lightning fast lookup tool',
            content: 'Developed the data collector tool and the API using Node and ExpressJS to lookup for equipment',
            image: '../brands-api.png'
        },
         
        //THIS KEY IS USED TO DISPLAY FULL WIDTH IMAGES IN BETWEEN CONTENT
        //ADD THE IMAGES URLS OR LOCAL PATH HERE
        images: ['../brands-api.png', '../brands-api-sample.png'],
         
         //THIS KEY WILL DISPLAY TECHNOLOGIES USED FOR THIS PROJECT SECTION
        technologies: ['JS', 'NodeJS', 'ExpressJS', 'MongoDB'],
         
        //THIS KEY IS USED TO DISPLAY PARAGRAPHS  THAT MIGHT INCLUDE A TITLE OR NOT
        // TITLE IS MANDATORY BUT CAN BE AN EMPTY STRING WHEN PARAGRAPHS IS TO BE DISPLAY WITHOUT TITLE.
        paragraph: [
            { title: 'Why I built this?', content: 'Search bars, search bars, search bars, I built this tool to improve the way search bars are used in an app, when a user is trying to search for a keyword on a large database or index, there could be >500ms delay between the request and response received, this is detrimental to the UX and adds some additional traffic to the server, so i believe for extremely large apps with extremely large searchable databases(data that any user can retrieve from a searchbar with or without authentication), the search bars should have their own service API and should be handled in a separate server, this to remove the search traffic from the main app server' },
            { title: '', content: 'In this case separating the search requests for equipment information (over 2,000,000 documents holding data from brands, models,makes,categories or types )from content requests(images, videos, other data) improved the flow and reduced the request-response time for all requests (both content and searchable data) by 100-150ms which is a considerable reduction if you consider services like USHIP or RB that get hundreds of thousands of requests per minute.' },
            { title: 'How I built it?', content: 'First I created a webcrawling tool to collect equipment information from equipment manufacturers, this to create a reliable database with up to date information, second I used NodeJS and ExpressJS to build the API, this app is packed in less than 150 lines. Below is a sample of the open public-no-authentication needed version:' },
            { title: 'Simple Routes', content: 'Less code means easier debugging and faster scaling, now the sample code below is for the server routes using a simple middleware for the equipment lookup' },
            { title: 'Now the actual lookup:', content: 'I created a different middleware to handle the lookpup for each version of the API, there are two versions, one that is public and handles the lookup from a local object file or local db and one private that uses a different architecture and is mostly served from a cloud service, now for the open API middleware, below is the code that powers this lookup:' },
            { title: 'Try it here', content: 'You can try the lookup api in the search bar below, all the requests to the lookup API are performed while typing, if you want to check the raw API, check the reference section below. For now try searching for equipment, like "excavator", "caterpillar 320", "truck", "transportation" etc and check the console for detailed information:' },
            { title: '', content: 'below is a sample response while searching for "construction" which enconded would call the api like this "api/equipmentLookup?search=construction":' }
        ],
         
        //THIS KEY WILL RENDER AN CUSTOM COMPONENT USING AN IFRAME AND GITHUB GISTS,
         //IF YOU WANT TO DISPLAY CODE,MARKUP OR ANY FORMAT SUPPORTED BUT GITHUB GISTS, 
         // CREATE A GIST ON GITHUB AND ADD THE LINK HERE
         // TITLE IS OPTIONAL, WHERE YOU SHOULD ADD THE CODE DESCRIPTION.
        code: [
            { title: '', url: 'https://gist.github.com/buddyeorl/b26d1ed91bf75f6b07eb3f95b3092b6f.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/4addccd6eedcabffa12f0e71be2ff348.js' },
            { title: 'Equipment lookup middleware', url: 'https://gist.github.com/buddyeorl/46f7997907498458a8ab1c04c9b0dd80.js' },
        ],
         
        // THIS KEY WILL RENDER this: <p>{content} <a href={url}> {label} </a ></p>
        reference: [
            { content: 'Search for Cat 320 in the public API, See it in action', label: 'here', url: 'https://api-machinerypal.herokuapp.com/api/equipmentLookup?search=320&search=cat' },
            { content: 'Or more specific Search for Cat 320 Midi Excavator in the public API, See it in action', label: 'here', url: 'https://api-machinerypal.herokuapp.com/api/equipmentLookup?search=320&search=excavator&search=midi' }

        ],
         
         // THIS KEY WILL BE USED TO RENDER ANY REACT FUNCTIONAL OR OBJECT  COMPONENT INSIDE A WRAPPER <div><span> {component} </span></div>
         // YOU CAN STORE AS MANY COMPONENTS AS YOU WANT (CONSIDER THE ARRAY LIMIT SIZE)
        component: [
            <SearchBar />
        ],
          
        //THIS KEY WILL BE USED AS THE MAIN URL FOR THIS APP, USE IT TO LINK THIS PROJECT WEBSITE/GITHUB ACCOUNT ETC.
        link: 'https://api-machinerypal.herokuapp.com/api/equipmentLookup?search=320&search=cat',
        
          
        //everything that goes after the main content
        //REACT WILL RENDER THIS PROJECT CONTENT IN THE ORDER GIVEN,SO order[0] WILL BE RENDERED AFTER THE MAIN CONTENT
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'paragraph', index: 2 },
            { type: 'code', index: 0 },
            { type: 'paragraph', index: 3 },
            { type: 'code', index: 1 },
            { type: 'paragraph', index: 4 },
            { type: 'code', index: 2 },
            { type: 'paragraph', index: 5 },
            { type: 'component', index: 0 },
            { type: 'paragraph', index: 6 },
            { type: 'image', index: 1 },
            { type: 'technologies' },
            { type: 'link' }]
    },
  //add more projects here
}
```


see the above example [live](https://alexcode.herokuapp.com/projects/brands-api)

### `The server`

The server was built with nodejs. it's light and simple. The api has only one entry `api/send` that handles the sending emails functionality using nodemailer, all the setup is done, you just need to setup your own email credentials using the env variables to make it work with your information, this are the three variables you need to setup when you deploy your portfolio, :

```javascript
    let transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.ACCESS
        }
    });
```

* `SERVICE`: Type of email service you have. 
* `EMAIL`: Your email address.
* `ACCESS`: Your email password.

**Note1: see nodemailer's [API]() for more information on how nodemailer handles your credentials.**<br />
**Note2: it`s always important that you take all the security steps to protect sensitive data specially when handling passwords in plain text. I recommend you use a type of encryption but the explanation of that is beyond the scope of this portfolio site.**<br />

### `Test locally /api/send (sending emails)`

To test sending emails locally you need to setup the env variables. If you are on macOS you can setup you enviromental variables to test the email sending functionality, here are the steps to do this:
* create a text file .env in the project root directory and open it:
* write each env variable as follows:
    * `export FOO='bar'`
    * `export FIZZ='buzz'`
* save the file
* Go to the terminal where you will run your node application and run the file as follows(assuming the file is in the root directory of the project and you are at the root directory on the terminal):
    * `source nameOfTheFile.env`
* to test if the env variable were set correctly type on the terminal:
    * `printenv` you should see the two variables set above
* run your node application 


## `Learn More`

Again check my portfolio here [Alex Lizarraga](https://www.alexcode.io). or if you have any questions  about this project or any other project or just want to say hi, send me an email here hello@alexcode.io

if you want to contribute with this project please first check the [CODE_OF_CONDUCT](https://github.com/buddyeorl/portfolio/blob/master/CODE_OF_CONDUCT.MD)

Don't forget to star this project if you liked it
