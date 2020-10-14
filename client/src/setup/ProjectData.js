import React from 'react';

//===========import all the components and effects you want to showcase(if any)============//
//custom components
import ChatButton from '../components/ChatButton';
import ChattyForm from '../components/ChattyForm'
import ActivateOnClick from '../components/ActivateOnClick';
import RangeSlider from '../components/ProjectComponents/MP Components/RangeSlider';
import SearchBar from '../components/ProjectComponents/SearchBar';
import { GalleryMobile } from '../components/ProjectComponents/MP Components/Gallery';
import MagneticMouse from '../components/ProjectComponents/MagneticMouse';
import MovingLabel from '../components/ProjectComponents/MovingLabel';
//effects
import Buff from '../effects/Buff';
import Typing from '../effects/Typing';
import SlideOnLoad from '../effects/SlideOnLoad';
//===========================================================================================//

//=========================================PDF CV============================================//
const cvFile = '../assets/pdfs/CV JULY 2020.pdf';
//===========================================================================================//

//=====================================developer's info======================================//
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
//===========================================================================================//


//=====================================Portfolio Projects====================================//
const shortProjects = {
    machinerypal: {
        url: '/projects/machinerypal',

        main: {
            title: 'Machinery Pal',
            duty: 'Full Stack Web Developer',
            description: 'Fleet Management and Ecommerce app',
            content: 'Served as a bridge between the Back-end and Front-end team, focused on the back-end development',
            image: '../assets/images/machinerypal.png'
        },
        images: ['../assets/images/machinerypal.png'],
        technologies: ['JS', 'NodeJS', 'AWS S3', 'ExpressJS', 'PassportJS', 'cookie-session', 'Google Oauth', 'MongoDB'],
        paragraph: [
            { title: 'The API', content: 'Designed and Built the API, Express was a great choice for the server when it comes to creating and exposing the API to communicate as a client with the application. Below is a small sample of why I used express for the API:' },
            { title: 'The Mongo DB', content: 'Now for the database I used Mongodb, again similar to expressjs, Mongo > 4.0 provides a huge flexibility that allowed me to add features in a breeze, such as the following piece of code that creates an index to handle a document subscription and deletes it 60 seconds after expiration using createIndex and expireAfterSeconds features:' },
            { title: 'The Cloud Storage', content: 'Now we got into the good stuff, There are so many options for data storage out there, in this case, since this app is expected to handle thounsands of requests per second for images and videos, I needed a reliable service to store huge amounts of data and handle all the traffic, while spending less time in implementing this solution, and since I had experience working with AWS and after discussions with the team we decided to use S3 buckets to store data. ' },
            { title: '', content: 'One of my major contributions in this area was to create a simple upload script using multer and multerS3 to upload arrays of files, and naming the files stored in the S3 buckets using SHA256 in a breeze, simple yet powerful, below is a sample:' },
            { title: '', content: 'Also Incorporated a geometric calculation for the distance between two points by latitude and longitude, this is specially important when sorting results by distance from the user or zipcode given' },
            { title: '', content: 'And here is the implementation using mongodb aggregate pipeline to calculate distance between a given coordinate (usually the user\'s location or zipcode coordinates) and the mongodb document\'s coordinates, and create a distance field and add it to the result object without modifying the original document, which is then send to the client for processing:' },
            { title: 'Additional Contributions', content: 'I also contributed with the team to develop the authentication process using PassportJS local and google strategies and cookie sessions,, implemented the payment API, helped writing the app documentation and much more intangible contributions.' },

        ],
        code: [
            { title: 'Simply handling the routes with express and express router', url: 'https://gist.github.com/buddyeorl/529e7b3ae3106a3d740543069f764dbe.js' },
            { title: 'Took advantage of the Express flexibility:', url: 'https://gist.github.com/buddyeorl/dfbd886a94992d746ff5ec3f7f0ba959.js' },
            { title: 'Complex operations made simple with modularity and middlewares:', url: 'https://gist.github.com/buddyeorl/a72c23bfe2fbf1cef79d51074d44aeb5.js' },
            { title: '', url: "https://gist.github.com/buddyeorl/85407e5e7612c87fc7a1d550cae2317a.js" },
            { title: '', url: "https://gist.github.com/buddyeorl/b5f56afefd9c16e47ff2e8b61bebf1fa.js" },
            { title: '', url: 'https://gist.github.com/buddyeorl/81cfac983bb52a50bd432d94a08d0108.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/622bf4a3131db48354e203f0df119250.js' }
        ],
        link: 'https://www.machinerypal.com',
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'code', index: 0 },
            { type: 'code', index: 1 },
            { type: 'code', index: 2 },
            { type: 'paragraph', index: 1 },
            { type: 'code', index: 3 },
            { type: 'paragraph', index: 2 },
            { type: 'paragraph', index: 3 },
            { type: 'code', index: 4 },
            { type: 'paragraph', index: 4 },
            { type: 'code', index: 5 },
            { type: 'paragraph', index: 5 },
            { type: 'code', index: 6 },
            { type: 'paragraph', index: 6 },
            { type: 'technologies' },
            { type: 'link' }
        ],
    },
    'MP Component Library': {
        url: '/projects/MP Component Library',

        main: {
            title: 'MP Component Library',
            duty: 'Front End Developer',
            description: 'Component Library and Design System',
            content: 'I expanded the component library, My goal was to keep things simple and flexible to ensure that it would actually be used',
            image: '../assets/images/MP Lib.png'
        },
        images: ['../assets/images/MP Lib.png'],
        technologies: ['ReactJS', 'Redux', 'React Router', 'HTML5', 'CSS', 'JS', 'Material-UI'],
        paragraph: [
            { title: 'The Framework', content: 'The MP component library is used by the uship.com corporation and all the siter companies including machinerypal.com, the library hold a set of components that are used by multiple teams. To build the components, I used ReactJS functional components and React hooks because of the flexibility and how easy it is to implement and reuse them' },
            { title: '', content: 'Below is a set of sample components I built for this library:' },
            { title: 'Range Slider', content: 'Making filtering and filling up forms 63% faster by using a range slider field, Easy to set and customize Range Slider, touch able for mobile devices,solving the problem of multiple inputs when asking users for range data, with a callback option to handle the data:' },
            { title: 'Buff Effect', content: 'Effect that shows a small buff when hover over or click/tap, easy to implement in any button, div, span, and tag that uses borders:' },
            { title: 'Touch Enabled Mobile Gallery', content: 'Multi functional gallery to display images, with touch/slide functionality, built to prevent accidental slides when user slide down or up while touching the gallery, most of the open source touch enabled galleries will scroll to the left or right when user is navigating a site, to prevent this I designed this gallery with that problem in mind, so navigation is natural eventhough there\'s a horizontal scrollable gallery, so unless the user is holding the main image slide won\'t activate, I also added the scrollable thumbnail sliders with optional left and right buttons, and added zoom/pinch functionality, implemented from scratch with no external libraries:' },
            { title: 'Actions and Helpers', content: 'Among the actions and helpers I built, one that comes to mind is a small reusable action to enconde content into a URI string to later be used as URL to preview images before uploading, the main problem is that when user is uploading an image we should show a preview of the image before uploading it so the user can review,delete or cancel if needed, many services upload the image to the server and show the preview to the user from the uploaded image URL, then if the user cancels the upload, the app deletes the uploaded image from the server, this cause an additional cost that can be prevented by previewing the file before uploading directly from the image file, the user still can cancel uploads but there\'s no cost associated to this action since everything is handled locally,now the problem is that the <img/> tag won\'t handle files well (...At all), so I implemented a way to encode the file content into a URI string that can be used as URL in the <img/> tag, below is the code: ' },
            { title: 'And More...', content: 'This is only a small sample of the components and helpers I built for this library, if you have any question about this project below is my contact.' },

        ],
        code: [
            { title: '', url: 'https://gist.github.com/buddyeorl/41e9d2cf61796df5eb2b14172625ca58.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/4c345a73ff2f0df9f52de8d6e9438311.js' },
            { title: 'To see it in action please try this component on a mobile or touch enabled device, for swipes, pinch gestures, etc to work', url: 'https://gist.github.com/buddyeorl/e17f17aeda790c9105186c7e1b30a37a.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/779175d3516afdb2a8fc1ec58f9951d0.js' },
        ],
        reference: [
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/components/ProjectComponents/MP%20Components/RangeSlider' },
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/effects/Buff' },
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/components/ProjectComponents/MP%20Components/Gallery' },
        ],
        link: 'https://www.machinerypal.com',
        component: [
            <div style={{ width: 'calc(100% - 15px)' }}>
                <RangeSlider range={[1980, 2020]} label={'Year'} cb={(startValue, endValue) => { console.log('Start=', startValue, ' End=', endValue); }} />
                <RangeSlider range={[1, 10]} label='Period' />
                <RangeSlider range={[0, 13]} label='Size' colorButtonLeft='#47a3f5' colorButtonRight='#2e7bbd' colorProgress='black' />
            </div>,
            <React.Fragment><Buff><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '50px', margin: '0px 5px', background: 'steelblue', color: 'white', cursor: 'pointer', maxWidth: '20vw' }}> Div </div></Buff><Buff><span style={{ height: '50px', width: '100px', background: 'rgb(53, 53, 53)', color: 'white', borderRadius: '28px 28px 11px 9px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 400, cursor: 'pointer', borderWidth: '1px', maxWidth: '20vw' }} > Span </span></Buff><Buff><button style={{ borderRadius: '15px', height: '50px', width: '100px', outline: 0, color: 'rgb(113, 106, 106)', background: 'white', borderStyle: 'solid', borderColor: 'cornflowerblue', borderWidth: '1px', fontWeight: 100, cursor: 'pointer', margin: '5px', padding: '5px', maxWidth: '20vw' }}>Button</button></Buff></React.Fragment>,
            <div style={{ background: 'white', boxShadow: '-1px 1px 5px -2px', borderRadius: '5px', }}>
                <GalleryMobile images={['/machinerypal.png', '/katena.png', 'https://images.pexels.com/photos/5533931/pexels-photo-5533931.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500']} />
            </div>

        ],
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'paragraph', index: 2 },
            { type: 'component', index: 0 },
            { type: 'code', index: 0 },
            { type: 'reference', index: 0 },
            { type: 'paragraph', index: 3 },
            { type: 'component', index: 1 },
            { type: 'code', index: 1 },
            { type: 'reference', index: 1 },
            { type: 'paragraph', index: 4 },
            { type: 'component', index: 2 },
            { type: 'code', index: 2 },
            { type: 'reference', index: 2 },
            { type: 'paragraph', index: 5 },
            { type: 'code', index: 3 },
            { type: 'paragraph', index: 6 },
            { type: 'technologies' },
            { type: 'link' }
        ]
    },
    'zipcode-distance-api': {
        url: '/projects/zipcode-distance-api',

        main: {
            title: 'Zipcode Distance API',
            duty: 'Back End Developer',
            description: 'Open source zipcode information API. ',
            content: 'A non production fast and simple API used by USHIP, MP and other development teams to handle zipcode data used when displaying results by distance, city or location',
            image: '../assets/images/zipcode-city-distance.png'
        },
        images: ['../assets/images/zipcode-city-distance.png'],
        technologies: ['NodeJS', 'JS', 'ExpressJS', 'Express Router', 'CORS', 'Heroku'],
        paragraph: [
            { title: 'The Problem', content: 'When working with location, zipcodes and distances, there are a few options to go with, one is to set a database with all the zipcode data and querying for this data all the time, adding unnecesary traffic to the server. Other option is packing the zipcode data file into the app to handle this process on the client side, getting zipcode info on the client side is faster and removes the unnecessary traffic from the server, the problem is that this can easily add 7-10MBs to the build and usually after images and videos is the biggest size factor in the app. This additional file increases the initial load times between 1.2-2.9s for the average user, as developers we\'re always looking for ways to decrease the loading times, build sizes and server traffic, so in this case, the place to look at is the zipcode data file.' },
            { title: 'The Solution', content: 'I created a zipcode API that is independent from the app server, the API processes all the requests for zipcode data, distance, city info etc. It\'s open source so developers can set their own zipcode API servers to handle traffic and don\'t depend on the public API, so it can be used by several services and apps' },
            { title: 'The Data', content: 'Using util, path and readline node modules, I parsed into a JSON object the most recent data from the US census site along with city codes and locations. I created two different files, one with the zipcodes as keys, and one with the cities as keys, this allows faster queries like distance between zipcodes, or cities, and get info directly by zipcode or city without deep searching the zipcode object, below is a sample of the function I created to parse the data into a separate file using util and path modules.' },
            { title: 'The Server', content: 'I built the API server by taking advantage of ExpressJS flexibility and Express Router, below is an example sample implementation for this API:' },
        ],
        code: [
            { title: '', url: 'https://gist.github.com/buddyeorl/92126eaef81fe7ce9e8c077e68f39d3b.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/cf605b42046a243d73859aa291caca3b.js' },
        ],
        reference: [
            { content: 'Check the public API readme ', label: 'here', url: 'https://github.com/buddyeorl/zipcode-city-distance-api' },
        ],
        link: 'https://github.com/buddyeorl/zipcode-city-distance-api',
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'paragraph', index: 2 },
            { type: 'code', index: 0 },
            { type: 'paragraph', index: 3 },
            { type: 'code', index: 1 },
            { type: 'reference', index: 0 },
            { type: 'technologies' },
            { type: 'link' }
        ]
    },
    'zipcode-city-distance-pkg': {
        url: '/projects/zipcode-city-distance-pkg',

        main: {
            title: 'Zipcode-City-Distance PKG',
            duty: 'Back End Developer',
            description: 'Open source zipcode information NPM package. ',
            content: 'A fast and simple pkg used by RB auctioneers, Iron planet, Ritchie Specs, MP and other sites to handle zipcode data used when displaying results by distance, city or location handled on the server side',
            image: '../assets/images/zipcode-city-distance-pkg.png'
        },
        images: ['../assets/images/zipcode-city-distance-pkg.png'],
        technologies: ['NodeJS', 'JS'],
        paragraph: [
            { title: 'Get all data from a zipcode or city', content: 'Just simple geometry, along with the most recent US geo raw data taken from the US Census website, I created this npm module to solve a problem our dev team had with the USPS API limitations to get radius data and more specific zipcode information, ' },
            { title: 'No external libraries', content: 'Below is a small code sample to get the zipcodes around a given radius from a zipcode:' }
        ],
        code: [
            { tile: '', url: 'https://gist.github.com/buddyeorl/5f005cb18c470b984003526422a44d37.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/916a02ae66d5aa11cfe78bea11e9c139.js' },
        ],
        reference: [
            { content: 'Check the Zipcode-city-distance-pkg Github Repo ', label: 'here', url: 'https://github.com/buddyeorl/zipcode-city-distance-pkg' },
        ],
        link: 'https://www.npmjs.com/package/zipcode-city-distance',
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'code', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'code', index: 1 },
            { type: 'technologies' },
            { type: 'link' },
            { type: 'reference', index: 0 }
        ]
    },
    crawlybid: {
        url: '/projects/crawlybid',

        main: {
            title: 'Crawly Bid',
            duty: 'Back End Developer',
            description: 'Web Crawling tool to keep records of auction data along multiple auction sites',
            content: 'A fast NodeJS web crawling tool used by IronPlanet to keep auction results and snapshots from multiple auction and listing sites to build a trustful record database of used equipment, and prevent fraud on equipment sales',
            image: 'https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        },
        images: ['https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'],
        technologies: ['NodeJS', 'Cheerio', 'Axios', 'JS'],
        paragraph: [
            { title: 'Why web crawling for used equipment data', content: 'The used equipment market is over $1.5 billion in the US and over $120 billion globally, unlike the car market and despite the size of this market, there\'s no available tool to check accurate equipment records, So I built a tool that\'s now used to keep a historic records of every heavy equipment sold through any auction site, to prevent resellers tamper with mileage, hour gouges and trick customers with false equipment features and descriptions' },
            { title: 'Seriously Cheerio!', content: 'I built this tool using axios to fetch data from multiple sites and cheerio to parse and manipulate the response received from axios, after manipulation an object is created for each equipment a file is written to a storage service data for later manipulation, below is a small sample used to write files of equipment categories from a site:' },

        ],
        code: [
            { tile: '', url: 'https://gist.github.com/buddyeorl/4e7d8f80734739d524980f1e489e8b94.js' },
        ],
        // link: 'https://www.npmjs.com/package/zipcode-city-distance',
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'code', index: 0 },
            { type: 'technologies' },
            //{ type: 'link' }
        ]
    },
    'brands-api': {
        url: '/projects/brands-api',

        main: {
            title: 'Brands API',
            duty: 'Back End Developer',
            description: 'NodeJS Lightweight and lightning fast lookup tool',
            content: 'Developed the data collector tool and the API using Node and ExpressJS to lookup for equipment',
            image: '../assets/images/brands-api.png'
        },
        images: ['../assets/images/brands-api.png', '../assets/images/brands-api-sample.png'],
        technologies: ['JS', 'NodeJS', 'ExpressJS', 'MongoDB'],
        paragraph: [
            { title: 'Why I built this?', content: 'Search bars, search bars, search bars, I built this tool to improve the way search bars are used in an app, when a user is trying to search for a keyword on a large database or index, there could be >500ms delay between the request and response received, this is detrimental to the UX and adds some additional traffic to the server, so i believe for extremely large apps with extremely large searchable databases(data that any user can retrieve from a searchbar with or without authentication), the search bars should have their own service API and should be handled in a separate server, this to remove the search traffic from the main app server' },
            { title: '', content: 'In this case separating the search requests for equipment information (over 2,000,000 documents holding data from brands, models,makes,categories or types )from content requests(images, videos, other data) improved the flow and reduced the request-response time for all requests (both content and searchable data) by 100-150ms which is a considerable reduction if you consider services like USHIP or RB that get hundreds of thousands of requests per minute.' },
            { title: 'How I built it?', content: 'First I created a webcrawling tool to collect equipment information from equipment manufacturers, this to create a reliable database with up to date information, second I used NodeJS and ExpressJS to build the API, this app is packed in less than 150 lines. Below is a sample of the open public-no-authentication needed version:' },
            { title: 'Simple Routes', content: 'Less code means easier debugging and faster scaling, now the sample code below is for the server routes using a simple middleware for the equipment lookup' },
            { title: 'Now the actual lookup:', content: 'I created a different middleware to handle the lookpup for each version of the API, there are two versions, one that is public and handles the lookup from a local object file or local db and one private that uses a different architecture and is mostly served from a cloud service, now for the open API middleware, below is the code that powers this lookup:' },
            { title: 'Try it here', content: 'You can try the lookup api in the search bar below, all the requests to the lookup API are performed while typing, if you want to check the raw API, check the reference section below. For now try searching for equipment, like "excavator", "caterpillar 320", "truck", "transportation" etc and check the console for detailed information:' },
            { title: '', content: 'below is a sample response while searching for "construction" which enconded would call the api like this "api/equipmentLookup?search=construction":' }
        ],
        code: [
            { title: '', url: 'https://gist.github.com/buddyeorl/b26d1ed91bf75f6b07eb3f95b3092b6f.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/4addccd6eedcabffa12f0e71be2ff348.js' },
            { title: 'Equipment lookup middleware', url: 'https://gist.github.com/buddyeorl/46f7997907498458a8ab1c04c9b0dd80.js' },
        ],
        reference: [
            { content: 'Search for Cat 320 in the public API, See it in action', label: 'here', url: 'https://api-machinerypal.herokuapp.com/api/equipmentLookup?search=320&search=cat' },
            { content: 'Or more specific Search for Cat 320 Midi Excavator in the public API, See it in action', label: 'here', url: 'https://api-machinerypal.herokuapp.com/api/equipmentLookup?search=320&search=excavator&search=midi' }

        ],
        component: [
            <SearchBar />
        ],
        link: 'https://api-machinerypal.herokuapp.com/api/equipmentLookup?search=320&search=cat',
        //everything that goes after the main content
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
    fastFleet: {
        url: '/projects/fastFleet',

        main: {
            title: 'Fast Fleet',
            duty: 'Full Stack developer',
            description: 'React Native app used to internally manage large vehicle fleets',
            content: 'Fast Fleet is powered by a Nodejs server and React Native for the mobile App ',
            image: '../assets/images/fastFleet.png'
        },
        images: ['../assets/images/fastFleetSample.gif'],
        technologies: ['JS', 'NodeJS', 'ExpressJS', 'Google Vision', 'AWS S3', 'React Native', 'Redux', 'PassportJS', 'Google Oauth', 'MySQL', 'Sequelize'],
        paragraph: [
            { title: 'Why Fast Fleet?', content: 'Fast fleet app was built as a solution for a Penske problem while trying to rent equipment that was down for repairs, rented out or simply not ready due to poor log keeping issues, We replaced the single purpose devices used to log in and out equipment, the main problem with that device was that you need to have it with you to report problems on vehicles, or you should call the fleet manager to write the report for the vehicle  and then send it to the rent managers where equipment is delisted from rental fleets. Also the device was extremely expensive, was failing and support was limited' },
            { title: 'Framework', content: 'After discussing the main problems with the managers and teams involved in logging data, The team decided to work on a solution easy to implement, fast to develop and mantain. The solution was React Native (SDK 36.0), code once for IOS and Android, one team can handle the mobile development, the server was built with nodejs' },
            { title: 'The db', content: 'Since most of penske legacy software is built on SQL and MYSQL, we decided to use MYSQL for the db to keep a natural flow between apps without needing to write or use additional plugins and how larget he MYSQL community is and how well supported the mysql node packages are. ' },
            { title: 'Google Vision', content: 'I was in charge of the main upload and image processing components, to make the process as simple as possible for the users, I incorporated the google vision API to analyze the serial numbers or vin numbers of a vehicle. When given a picture, google vision analyzes any text in the picture and replies with an array of strings, I took this string and look it up in the database to match a possible equipment, if the equipment serial/vin number is found in the db, the user would get feedback with the response to continue or try again or manually add the vin/serial. This process reduced the time to log in/out equipment. Below is the main simplified implementation of google vision API to recognize text from an image uploaded and processed with multer:' },
            { title: 'The Upload', content: 'I handled the images upload and storage  with amazon S3 buckets, S3 buckets are easy to implement and uploads are handle with a simple middleware that uses multer and multerS3:' },
            { title: 'The Camera Frame', content: 'Below is a reusable react native component created to handle the camera permissions for this project, along with the picture taking, This component fetches the Fast Fleet API which I won\'t provide here, so if you want to reuse this component you need to set your own API url on line 42, Also this component requires a camera grid to work, I won\'t provide the camera grid here but if you need assistance implementing a camera grid to work with this component, just email me or contact me at the bottom of this page.' },
            { title: '', content: 'Here is a sample of the google vision functionality, recognizing a serial number from the database' },
        ],
        code: [
            { title: '', url: 'https://gist.github.com/buddyeorl/0a87ebd836ebb34e0629dcca2f063e92.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/d22830f7a09d7612860440cc90464706.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/6d2c9517d9727ffdb7439aab4a2fa9a0.js' },
        ],
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'paragraph', index: 2 },
            { type: 'paragraph', index: 3 },
            { type: 'code', index: 0 },
            { type: 'paragraph', index: 6 },
            { type: 'image', index: 0 },
            { type: 'paragraph', index: 4 },
            { type: 'code', index: 1 },
            { type: 'paragraph', index: 5 },
            { type: 'code', index: 2 },
            { type: 'technologies' },
            // { type: 'link' }
        ]
    },
    tinyMonitor: {
        url: '/projects/tinyMonitor',

        main: {
            title: 'Tiny Monitor',
            duty: 'Full Stack developer',
            description: 'Tiny Monitor Raspberry PI prototype powered by nodejs and react native',
            content: 'Using nodejs I Built the server and React Native App for a prototype device called "Tiny Monitor" which monitors baby car seats and alert parents when movement, sound and high temperature is detected inside a vehicle',
            image: '../assets/images/tinyMonitor.png'
        },
        images: ['../assets/images/tinyMonitor.png', '../assets/images/tinyMonitor.gif'],
        technologies: ['JS', 'NodeJS', 'React Native', 'Websockets', 'Twilio', 'rpi-gpio', 'ds18x20', 'onoff', 'Raspberry Pi', 'ExpressJS', 'PassportJS', 'MongoDB'],
        paragraph: [
            { title: 'Tiny monitor what?', content: 'Tiny monitor uses temperature, sound and movement sensors to warn parents when posibly a child is in a vehicle or else where and the conditions could be harmful for the child, this is a specially useful device for forgetful parents' },
            { title: 'What I did', content: 'My main job was to design the system that would power this device, including a way to read sensor data and show a feedback on a mobile app,  I did this by setting up two servers for internal communication, a monitor system for the sensor data, a warning system for the external communication, and finally a client side app' },
            { title: 'The servers', content: 'When working with raspberry pi prototypes, flexibility is the most important factor as prototypes change a lot during the development. I decided to use nodejs and build two servers. A local server on the RPi that would be able to create new users able to access it\'s data, read the sensors data and send feedback to the main server, the main server would authenticate the rpi device and let the users created by itself access its data from a mobile app, also the main server would handle the warnings' },
            { title: 'The Communication between servers?', content: 'The  main and local server used websockets to communicate, as soon as any device is turned on, the local node server starts with it and communication through websockets is stablished with the main server, the main server starts receiving sensor and warning data that can be accessed by the mobile app, below is a simplified implementation of the local server websocket connection:' },
            { title: 'What about the sensors?', content: 'I used rpi-gpio and onoff to access the Rpi gpio interface and gather the data from the sensors (used ds18x20 to read data from the temperature sensor) and send this data to the main server through websockets, check the code below where I set the sensor listeners and open the websocket connection if it has been cut:' },
            { title: 'The warnings and Twilio API?', content: 'There were two warning systems in place, the local server would trigger a sound alarm if sensor data passed certain threshold (e.g. temperature above certain level when movement or sound was recognized), the main server  would trigger a cancellable alarm, if the alarm was not cancelled within few seconds the server would make phone calls, and send text messages to emergency contacts using the twilio API' },
            { title: '', content: 'See below a short interaction and how movement, temperature and alarms are triggered on the app' },
            { title: 'The Mobile App', content: 'I built the mobile app using React Native, most of the components were created from scratch using react native components, the temperature thermostat and temperature indicator was created with react-native-svg, below is the component that will render one section ofr the thermostat and the temperature indicator:' },
            { title: '', content: 'Send me an email or contact me below if you need help building something similar to this or have any questions about this project' }
        ],
        code: [
            { title: '', url: 'https://gist.github.com/buddyeorl/ee5ab9d30c2fd135c8936e3f5222d5e9.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/9bd9db82b352892015e8780c7a89babd.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/a76a8673dd9e3602ba0b1a82423d83be.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/38931b8f89ad6f325116aaf3ee2e7b33.js' }
        ],
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'paragraph', index: 2 },
            { type: 'paragraph', index: 3 },
            { type: 'code', index: 0 },
            { type: 'paragraph', index: 4 },
            { type: 'code', index: 1 },
            { type: 'paragraph', index: 5 },
            { type: 'code', index: 2 },
            { type: 'paragraph', index: 6 },
            { type: 'image', index: 1 },
            { type: 'paragraph', index: 7 },
            { type: 'code', index: 2 },
            { type: 'paragraph', index: 8 },
            { type: 'technologies' },
            // { type: 'link' }
        ]
    },
    codeListener: {
        url: '/projects/codeListener',

        main: {
            title: 'Code Listener',
            duty: 'Full Stack developer',
            description: 'App that uses IBM Watson\'s Speech to text API to build websites from speech',
            content: 'Fun hackacthon project built over night, using the watson\'s speech recognition API',
            image: '../assets/images/theCodeListener.png'
        },
        images: ['../assets/images/theCodeListener.png'],
        technologies: ['JS', 'NodeJS', 'Jquery', 'ExpressJS', 'IBM Watson API'],
        paragraph: [
            { title: 'Say what??', content: 'The code listener is a fun project that I built for a hackathon, The main idea behind the code listener was to speak a word and see a change on the website (Basic commands, such as create "box", size "bigger", size "smaller", color "blue" etc) to help kids learn how to code by speaking commands and seeing changes right away, Also to develop a tool to be used by teachers around the world, teachers could go to the codelistener.herokuapp.com, speak some words,see changes and html code. ' },
            { title: 'How I built it?', content: 'I used my experience with the IBM watson API to implement the text to speech API, the api takes a stream of sound, analyze it and return an array of possible matches, including sentences and number of recognized speakers. The array is then parsed and match with a set of functions that handle the html components built. ' },
            { title: '', content: 'Each html component built is assigned a unique ID that is shown to the users, the user can "target" the id to manipulate/modify/delete the html component with the basic voice commands.' },
            { title: '', content: 'the server was built with node and express, and it uses websockets to communicate with the client.' },

        ],
        code: [{ title: 'this is an example', url: 'https://gist.github.com/buddyeorl/501fa84ff89df13f04af531ed46e8da6.js' }],
        reference: [
            { content: 'Special thanks to Sherwino for helping me with the deployment and readme', label: 'Sherwino', url: 'https://github.com/sherwino' },
            { content: 'Melissa for the Front-end', label: 'Melissa', url: 'https://github.com/m-wolowicz' },
            { content: 'And to Charles for his help and solutions', label: 'Charles', url: 'https://github.com/ThoughtFool' },
        ],

        link: 'https://thecodelistener.herokuapp.com/',
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'image', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'paragraph', index: 2 },
            { type: 'paragraph', index: 3 },
            { type: 'technologies' },
            { type: 'link' },
            { type: 'reference', index: 0 },
            { type: 'reference', index: 1 },
            { type: 'reference', index: 2 },
        ],

    },
    katena: {
        url: '/projects/katena',

        main: {
            title: 'Katena',
            duty: 'Full Stack Developer',
            description: 'Continuity of institutional knowledge tool',
            content: 'A tool for the continuity of institutional knowledge, built with Nodejs, Mongodb, IBM watson API, React and React Native ',
            image: '../assets/images/katena.png'
        },
        images: ['../assets/images/katena.png'],
        technologies: ['JS', 'NodeJS', 'ReactJS', 'ExpressJS', 'Express router', "JSON web tokens", 'PassportJS', 'MongoDB', 'Mongoose'],
        paragraph: [
            { title: 'So what is Katena?', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: 'And how it works', content: 'Katena uses a bot to support and train new employees, effectively gathers the employee\'s knowledge and keep the institutional "soul", so when the employee leaves the company, the bot takes over and train the new employees, assigns, recommends and learns the duties in the process.' },
            { title: 'So how\'s it built', content: 'I was in charge of designing and building the katena API but also worked as a bridge between the back and front end. I built the server using Nodejs, Express, Express router' },
            { title: 'What about the authentication?', content: 'Because the authentication has to serve both web clients and native mobile app clients I implemented the authentication using passportjs, local strategy only, JSON webtokens, bcrypt and SHA256 for the hashing, below is a sample of one of the authentication middlewares I built for this project:' },
            { title: 'what about the front end?', content: 'On the front end I implemented the web app framework using reactjs, the authentication workflow and the data/form fetching on the Admin section, below is a simple sample of the code I worked on the front end:' }

        ],
        code: [
            { title: '', url: 'https://gist.github.com/buddyeorl/db3a0af436a5dae9a41390ed355dec74.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/db79661fb2d9529c74c42c76844cf218.js' }
        ],
        link: 'https://www.katena.com',
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'image', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'paragraph', index: 2 },
            { type: 'code', index: 0 },
            { type: 'paragraph', index: 3 },
            { type: 'code', index: 1 },
            { type: 'technologies' },
            { type: 'link' }]
    },
    recipeFinder: {
        url: '/projects/recipeFinder',

        main: {
            title: 'Recipe Finder',
            duty: 'Full Stack Developer',
            description: 'Visual Recognition recipe finder using IBM Watson API',
            content: 'I worked as a full stack developer, specifically on the client/server design',
            image: '../assets/images/recipeFinder.png'
        },
        images: ['../assets/images/recipeFinder.png'],
        technologies: ['JS', 'NodeJS', 'Jquery', 'Sequelize', 'Google functions', 'Firebase', 'IBM Watson API', 'Wikipedia API', 'Yummly API'],
        paragraph: [
            { title: 'So What is this?', content: 'A recipe finder that help you find recipes and food information on the go, just take a picture of an ingredient or food, and you\'ll instantly get information about it, add it to the list and get all the recipes you can cook with that ingredient, that easy' },
            { title: 'Visual Recognition you said?', content: 'I built this app with the IBM watson visual recognition API, when the server receives a picture, it analyzes it with the watson API, Which then replies with a JSON object, the object is then iterate over to find food or ingredients data, an entry is then created in a firebase database, the fb db is being listen to by the client, so as soon as there\'s an entry update, the client receives immediate feedback to process the changes' },
            { title: 'Why wikepidia API?', content: 'Sometimes you want to know what that food/ingredient is?, the best way to do it?, take a picture and let the recipe finder tell you what it is, using IBM watson\'s response and wikipedia API to display the ingredient information ' },
            { title: 'Yumm Yummly?', content: 'After processing the image, parsing the response, feeding it to wikipedia API, we\'re ready for the recipe part of this recipe finder, I used the Yummly API to retrieve all recipes that match the ingredients in the list, you can add more ingredients by taking their pictures' },

        ],
        code: [{ title: 'this is an example', url: 'https://gist.github.com/buddyeorl/501fa84ff89df13f04af531ed46e8da6.js' }],
        link: 'https://whatthefork.herokuapp.com/home.html',
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'paragraph', index: 2 },
            { type: 'paragraph', index: 3 },
            { type: 'technologies' },
            { type: 'link' }]
    },
    firstPortfolio: {
        url: '/projects/firstPortfolio',

        main: {
            title: 'First Portfolio - Open Source',
            duty: 'Full Stack developer',
            description: 'A ReactJS portfolio easily customizable',
            content: 'I built this portfolio using Reactjs, fully responsive, and easy to customize',
            image: '../assets/images/firstPortfolio.png'
        },
        images: ['../assets/images/firstPortfolio.png'],
        technologies: ['JS', 'NodeJS', 'ReactJS', 'HTML', 'CSS', 'React Router', 'Firebase', 'IBM Watson',],

        paragraph: [
            { title: 'Portfolio and Framework', content: 'This is the first try at building a full portfolio that showcase my skills, and is easily customizable for other people to clone it with their information. The project was built with Reactjs, all components and transitions were built from scratch' },
            { title: 'The components', content: 'I built a set of components for this project, All reusable and easy to customize' },
            { title: 'The Magnetic Mouse', content: 'This component will move base on the mouse location, is built with transforms and perspective, listening to the mouse location on the screen with respect of the parent to move, rotate and change perspective accordingly, below is the sample, move the mouse around the container to see the div follow the mouse as it tries to get closer, if you exit the parent div, the position will reset to it\'s initial position:' },
            { title: 'The Moving Div', content: 'Similar to the magnetic mouse component, this component is more flexible, it accepts "message" component as a prop, "angle" in deg prop and a "follow" optional prop, this component will follow the mouse movement, always trying to get closer to the mouse, try it below:' },
            { title: '', content: 'Now let\'s try it with follow={false} and angle={50} with an image as a component' },
            { title: '', content: 'See below how to use this component' },

        ],
        code: [
            { title: '', url: 'https://gist.github.com/buddyeorl/22c39980872dec8020a2f2ed311048cc.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/091c2d3702b5ca31e4262537b49f1aaf.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/64099863a5b42907a2477cc62bd00c0f.js' },
        ],
        component: [
            <div style={{ height: '500px', width: '100%', boxShadow: '-1px 2px 4px -2px', borderRadius: '10px', margin: '10px', display: 'flex', justifyContent: 'center' }}>
                <MagneticMouse myBackground={'Hi this is a sample message'} />
            </div>,
            <div style={{ height: '500px', width: '100%', boxShadow: '-1px 2px 4px -2px', borderRadius: '10px', margin: '10px', display: 'flex', justifyContent: 'center' }}>
                <MovingLabel follow={true} angle={5} message={<h1>Hi, I'll follow your mouse, as long as you move it inside this div</h1>} />
            </div>,
            <div style={{ height: '500px', width: '100%', boxShadow: '-1px 2px 4px -2px', borderRadius: '10px', margin: '10px', display: 'flex', justifyContent: 'center' }}>
                <MovingLabel follow={false} angle={50} message={<div style={{ height: '200px', width: '300px', backgroundImage: 'url("../assets/images/firstPortfolio.png")', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', boxShadow: '0px 10px 10px -10px', borderRadius: '8px' }}></div>} />
            </div>,

        ],
        link: 'https://alexdatavault.herokuapp.com/',
        reference: [
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/components/ProjectComponents/MagneticMouse' },
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/components/ProjectComponents/MovingLabel' },
            { content: 'For all the components and transitions used in this project, to see how to customize it with your information or to clone the complete project, please visit the portfolio\'s github page ', label: 'React Portfolio', url: 'https://github.com/buddyeorl/3dportfolio' }

        ],

        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'paragraph', index: 2 },
            { type: 'component', index: 0 },
            { type: 'paragraph', index: 5 },
            { type: 'code', index: 0 },
            { type: 'reference', index: 0 },
            { type: 'paragraph', index: 3 },
            { type: 'component', index: 1 },
            { type: 'paragraph', index: 5 },
            { type: 'code', index: 1 },
            { type: 'paragraph', index: 4 },
            { type: 'component', index: 2 },
            { type: 'paragraph', index: 5 },
            { type: 'code', index: 2 },
            { type: 'reference', index: 1 },
            { type: 'technologies' },
            { type: 'link' },
            { type: 'reference', index: 2 }
        ]
    },
    portfolio: {
        url: '/projects/portfolio',

        main: {
            title: 'This Portfolio - Open Source',
            duty: 'Full Stack developer',
            description: 'Fully customizable portfolio, built with ReactJS',
            content: 'I created this portfolio as a way to showcase my skills and help those devs in need of an open source portfolio builder, easy to build, easy to navigate, modern design.',
            image: '../assets/images/portfolio.png'
        },
        images: ['../assets/images/portfolio.png'],
        technologies: ['JS', 'NodeJS', 'ReactJS', 'React Router', 'CSS'],
        paragraph: [
            { title: 'The framework', content: 'I built this portfolio and every component from scratch using Reactjs, Hooks and functional components for the front end, and NodeJS for the backend. The main objective for this project is to make it easier for devs to present their skills, projects and code in a simple organized and responsive way' },
            { title: 'The Setup', content: 'I built this portfolio to be easy to setup, a JS object holding all the project information, including images, titles, code etc, see below an example of setup, file located in:' },
            { title: 'The Routes?', content: 'All the Routes are handled with react-router with client side rendering, and the routes are created dinamically from the project data urls. For the navigation, I used the Array.reduce function to add "back" and "forward" pointers to each project in the project object as follows:' },
            { title: 'The Hooks', content: 'This project uses almost 100% hooks or functional components, below is the implementation of a hook that returns the screen width, height, and pageYOffset, used for responsiveness purposes:' },
            { title: 'The Typing Effect', content: 'Among the effect components created for this portfolio, my favorite is the Typing effect, below is the sample:' },
            { title: '', content: 'To use this component simply send an array of strings, each array item will render as an individual span:' },
            { title: 'The Sliding On Load Effect', content: 'Another simple effect that transforms up,down,left,right or custom direction a component on Load:' },
            { title: '', content: 'To use this component simply wrap your component with the SlideOnLoad component:' },
            { title: 'The Chat Button', content: 'I created this button while looking for ways to make the loading indicator appear on the button perimeter, the main problem with this approach is that buttons can have any shape making it tricky for a loading indicator around the surface. I used a shadow span for the activity indicator and the result is the following: ' },
            { title: '', content: 'See Below for usage of the chat button:' },
            { title: 'The Chatty Form', content: 'Forms are plain, tedious, long (or short), and simply boring, they take a lot of space and you need to scroll over them, but they shouldn\'t be like that, that\'s why I built this form based on the typing component and chat button above with some creativity and coding I made a form natural to fill up and less boring, check it out:' },
            { title: '', content: 'See Below how to use the chatty form:' },
            { title: 'The CodeGist component', content: 'Show me the code!!!. You probably noticed there\'s a lot of code snippets in this portfolio, but how I did it??, I took advantage of the Github Gists highlighting syntax for code and markdown and implemented a responsive component that renders on full height the github gists just with the gist url' },
            { title: 'The ActivateOnClick', content: 'This component was used above to show sample components, it works with a trigger button, simply wrap a component/effect you want to show/hide:' }
        ],
        code: [
            { title: '', url: 'https://gist.github.com/buddyeorl/372f10c7bd3976b1b677c9451776f343.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/a7c22c1e879e7ca469855a404431016c.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/2e34c7fa16a6f162538c44cf32613901.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/ef1bac2faaf99e39ff21f82f48711afd.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/15c3254d3d92b847b8dcb18e1e81dff0.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/896d2ab5e0411676ebc1eef739805457.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/515f91d7b973c1e1033404c73c8c2b51.js' },
            { title: 'Example of CodeGist with a MD file syntax', url: 'https://gist.github.com/buddyeorl/298b50ee07c66533b262c1df57cad4f8.js' },
            { title: 'Example of CodeGist with a JS file syntax', url: 'https://gist.github.com/buddyeorl/fa2bb38aae4ec479b379eaeb7b850926.js' },
            { title: 'See below how to use CodeGist', url: 'https://gist.github.com/buddyeorl/c78cd9e68a27bad7530dcff818624934.js' },
            { title: 'See below how to use ActivateOnClick', url: 'https://gist.github.com/buddyeorl/0d01220bae0b2c0d76c81ee6b1b64154.js' }
        ],
        component: [
            <ActivateOnClick> <div style={{ width: '200px' }}><Typing label={["Hey Im a react component", " check me out!!"]} /></div></ActivateOnClick>,
            <ActivateOnClick> <SlideOnLoad direction='left' end={'20px'}><div style={{ width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '-1px 1px 2px -1px' }} /> </SlideOnLoad></ActivateOnClick>,
            <ActivateOnClick> <SlideOnLoad direction='right' end={'20px'}><div style={{ width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '-1px 1px 2px -1px' }} /> </SlideOnLoad></ActivateOnClick>,
            <ActivateOnClick> <SlideOnLoad direction='up' end={'20px'}><div style={{ width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '-1px 1px 2px -1px' }} /> </SlideOnLoad></ActivateOnClick>,
            <ActivateOnClick> <SlideOnLoad direction='down' end={'20px'}><div style={{ width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '-1px 1px 2px -1px' }} /> </SlideOnLoad></ActivateOnClick>,
            <React.Fragment><ChatButton label={'Try me'} shadow={true} direction='right-reversed' /><ChatButton label={'Try me'} shadow={true} direction='right' /> <ChatButton label={'Try me'} shadow={true} /><ChatButton label={'Try me'} shadow={true} direction='left-reversed' /></React.Fragment>,
            <div style={{ width: '300px', position: 'relative' }}><ChatButton onClick={() => { alert("I\'m the only button here with onClick events") }} label={'Try rectangle button'} shadow={true} send={true} /></div>,
            <div style={{ height: '400px', position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderRadius: '10px', margin: '0px 5px', boxShadow: '-1px 2px 4px -2px' }}><ChattyForm standAlone={true} /></div>,
            <ActivateOnClick> <p> {`I'm a wrapped component, the button add/remove me from the DOM`} </p></ActivateOnClick>,

        ],
        link: 'https://github.com/buddyeorl/portfolio',
        reference: [
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/effects/Typing' },
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/blob/master/client/src/effects/SlideOnLoad' },
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/components/ChatButton' },
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/components/ChattyForm' },
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/components/CodeGist' },
            { content: 'See the code or download the component', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/components/ActivateOnClick' },
            { content: 'To clone this project or check all the components and to see how to customize it with your information check the', label: 'Portfolio Repo', url: 'https://github.com/buddyeorl/portfolio/tree/master/' },
            { content: 'All the components used in this project', label: 'React Portfolio', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/components' },
            { content: 'All effects in this repo', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/effects' },
            { content: 'All hooks in this repo', label: 'here', url: 'https://github.com/buddyeorl/portfolio/tree/master/client/src/hooks' },
        ],
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'code', index: 0 },
            { type: 'paragraph', index: 2 },
            { type: 'code', index: 1 },
            { type: 'paragraph', index: 3 },
            { type: 'code', index: 2 },
            { type: 'paragraph', index: 4 },
            { type: 'component', index: 0 },
            { type: 'paragraph', index: 5 },
            { type: 'code', index: 3 },
            { type: 'reference', index: 0 },
            { type: 'paragraph', index: 6 },
            { type: 'component', index: 1 },
            { type: 'component', index: 2 },
            { type: 'component', index: 3 },
            { type: 'component', index: 4 },
            { type: 'paragraph', index: 7 },
            { type: 'code', index: 4 },
            { type: 'reference', index: 1 },
            { type: 'paragraph', index: 8 },
            { type: 'component', index: 5 },
            { type: 'component', index: 6 },
            { type: 'paragraph', index: 9 },
            { type: 'code', index: 5 },
            { type: 'reference', index: 2 },
            { type: 'paragraph', index: 10 },
            { type: 'component', index: 7 },
            { type: 'paragraph', index: 11 },
            { type: 'code', index: 6 },
            { type: 'reference', index: 3 },
            { type: 'paragraph', index: 12 },
            { type: 'code', index: 7 },
            { type: 'code', index: 8 },
            { type: 'code', index: 9 },
            { type: 'reference', index: 4 },
            { type: 'paragraph', index: 13 },
            { type: 'component', index: 8 },
            { type: 'code', index: 10 },
            { type: 'reference', index: 5 },
            { type: 'technologies' },
            { type: 'link' },
            { type: 'reference', index: 6 },
            { type: 'reference', index: 7 },
            { type: 'reference', index: 8 },
            { type: 'reference', index: 9 },
        ]
    },
    giftastic: {
        url: '/projects/giftastic',

        main: {
            title: 'Giftastic',
            duty: 'Front End developer',
            description: 'Continuity of institutional knowledge tool',
            content: 'Fun Personal project, using the Giphy API to pull fun gifs based on input keywords',
            image: '../assets/images/giftastic.png'
        },
        images: ['../assets/images/giftastic.png'],
        technologies: ['JS', 'NodeJS', 'Jquery', 'Giphy API'],
        paragraph: [
            { title: 'The giphy joy', content: 'I created this project to showcase interaction between a client and an external API, in this case Giphy. In this app the client requests gifs through keywords, the keyword is sent to the Giphy API and response is received as a JSON object with an array of gifs that match the keyword. The user has to click the gifs to start playing it' },
            { title: 'How I Built it', content: 'This app was built with jquery and html using fetch API for the external API interactions.' },
        ],
        link: 'https://buddyeorl.github.io/GifTastic/',
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'technologies' },
            { type: 'link' }]
    }

}
//===========================================================================================//


//!!!!!!!!!!! DON'T MODIFY ANYTHING BELOW THIS LINE, DYNAMIC NAVIGATION IS SET BELOW!!!!!!!//
//add navigation:{back, forward} property to shortProjects object, the navigation are the urls to be used on the back and forward button in the ProjectPage component, by default the navigation will be added based on the order of project objects above:
Object.keys(shortProjects).reduceRight((cur, prev, index) => {
    if (shortProjects[cur].navigation) {
        shortProjects[cur].navigation.back = '/projects/' + prev;
    } else {
        shortProjects[cur].navigation = { back: '/projects/' + prev, forward: '/projects' }
    }

    if (shortProjects[prev].navigation) {
        shortProjects[prev].navigation.forward = '/projects/' + cur;
    } else {
        shortProjects[prev].navigation = { back: '/projects', forward: '/projects/' + cur }
    }
    return prev
})

export { cvFile, ownerInfo, shortProjects };