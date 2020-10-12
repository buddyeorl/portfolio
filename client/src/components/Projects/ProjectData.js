import React, { useState, useEffect } from 'react';
import RangeSlider from '../ProjectComponents/MP Components/RangeSlider';
import SearchBar from '../ProjectComponents/SearchBar'
import { GalleryMobile } from '../ProjectComponents/MP Components/Gallery'
import Buff from '../../effects/Buff'



const shortProjects = {
    machinerypal: {
        url: '/projects/machinerypal',

        main: {
            title: 'Machinery Pal',
            duty: 'Full Stack Web Developer',
            description: 'Fleet Management and Ecommerce app',
            content: 'Served as a bridge between the Back-end and Front-end team, focused on the back-end development',
            image: '../machinerypal.png'
        },
        images: ['../machinerypal.png'],
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
            image: '../MP Lib.png'
        },
        images: ['../MP Lib.png'],
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
        link: 'https://www.katena.com',
        component: [
            <div style={{ width: 'calc(100% - 15px)' }}>
                <RangeSlider range={[1980, 2020]} label={'Year'} cb={(startValue, endValue) => { console.log('Start=', startValue, ' End=', endValue); }} />
                <RangeSlider range={[1, 10]} label='Period' />
                <RangeSlider range={[0, 13]} label='Size' colorButtonLeft='#47a3f5' colorButtonRight='#2e7bbd' colorProgress='black' />
            </div>,
            <React.Fragment><Buff><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '50px', margin: '0px 5px', background: 'steelblue', color: 'white', cursor: 'pointer', maxWidth: '20vw' }}> Div </div></Buff><Buff><span style={{ height: '50px', width: '100px', background: 'rgb(53, 53, 53)', color: 'white', borderRadius: '28px 28px 11px 9px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 400, cursor: 'pointer', borderWidth: '1px', maxWidth: '20vw' }} > Span </span></Buff><Buff><button style={{ borderRadius: '15px', height: '50px', width: '100px', outline: 0, color: 'rgb(113, 106, 106)', background: 'white', borderStyle: 'solid', borderColor: 'cornflowerblue', borderWidth: '1px', fontWeight: 100, cursor: 'pointer', margin: '5px', padding: '5px', maxWidth: '20vw' }}>Button</button></Buff></React.Fragment>,
            <div style={{ background: 'white', background: 'white', boxShadow: '-1px 1px 5px -2px', borderRadius: '5px', }}>
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
            { type: 'paragraph', index: 3 },
            { type: 'component', index: 1 },
            { type: 'code', index: 1 },
            { type: 'paragraph', index: 4 },
            { type: 'component', index: 2 },
            { type: 'code', index: 2 },
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
            image: '../zipcode-city-distance.png'
        },
        images: ['../zipcode-city-distance.png'],
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
            image: '../zipcode-city-distance-pkg.png'
        },
        images: ['../zipcode-city-distance-pkg.png'],
        technologies: ['NodeJS', 'JS'],
        paragraph: [
            { title: 'Get all data from a zipcode or city', content: 'Just simple geometry, along with the most recent US geo raw data taken from the US Census website, I created this npm module to solve a problem our dev team had with the USPS API limitations to get radius data and more specific zipcode information, ' },
            { title: 'No external libraries', content: 'Below is a small code sample to get the zipcodes around a given radius from a zipcode:' }
        ],
        code: [
            { tile: '', url: 'https://gist.github.com/buddyeorl/5f005cb18c470b984003526422a44d37.js' },
            { title: '', url: 'https://gist.github.com/buddyeorl/916a02ae66d5aa11cfe78bea11e9c139.js' },
        ],
        link: 'https://www.npmjs.com/package/zipcode-city-distance',
        //everything that goes after the main content
        order: [
            { type: 'paragraph', index: 0 },
            { type: 'code', index: 0 },
            { type: 'paragraph', index: 1 },
            { type: 'code', index: 1 },
            { type: 'technologies' },
            { type: 'link' }
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
            image: '../brands-api.png'
        },
        images: ['../brands-api.png', '../brands-api-sample.png'],
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
            image: '../fastFleet.png'
        },
        images: ['../fastFleetSample.gif'],
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
        link: 'https://www.katena.com',
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
            { type: 'link' }
        ]
    },
    tinyMonitor: {
        url: '/projects/tinyMonitor',

        main: {
            title: 'Tiny Monitor',
            duty: 'Full Stack developer',
            description: 'Tiny Monitor Raspberry PI prototype powered by nodejs and react native',
            content: 'Using nodejs I Built the server and React Native App for a prototype device called "Tiny Monitor" which monitors baby car seats and alert parents when movement, sound and high temperature is detected inside a vehicle',
            image: '../tinyMonitor.png'
        },
        images: ['../tinyMonitor.png', '../tinyMonitor.gif'],
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
        link: 'https://www.katena.com',
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
            { type: 'link' }]
    },
    codeListener: {
        url: '/projects/codeListener',

        main: {
            title: 'Code Listener',
            duty: 'Full Stack developer',
            description: 'App that uses IBM Watson\'s Speech recognition to build websites from speech',
            content: 'I expanded the component library, My goal was to keep things simple and flexible to ensure that it would actually be used',
            image: '../theCodeListener.png'
        },
        images: ['../theCodeListener.png'],
        technologies: ['JS', 'NodeJS', 'ReactJS', 'ExpressJS', 'PassportJS', 'MongoDB'],
        paragraph: [
            { title: 'First Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: 'Secondary Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: '', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
        ],
        code: [{ title: 'this is an example', url: 'https://gist.github.com/buddyeorl/501fa84ff89df13f04af531ed46e8da6.js' }],
        link: 'https://thecodelistener.herokuapp.com/',
        //everything that goes after the main content
        order: [{ type: 'paragraph', index: 0 }, { type: 'image', index: 0 }, { type: 'code', index: 0 }, { type: 'paragraph', index: 1 }, { type: 'technologies' }, { type: 'link' }]
    },
    katena: {
        url: '/projects/katena',

        main: {
            title: 'Katena',
            duty: 'Back End developer',
            description: 'Continuity of institutional knowledge tool',
            content: 'I expanded the component library, My goal was to keep things simple and flexible to ensure that it would actually be used',
            image: '../katena.png'
        },
        images: ['../katena.png'],
        technologies: ['JS', 'NodeJS', 'ReactJS', 'ExpressJS', 'PassportJS', 'MongoDB'],
        paragraph: [
            { title: 'First Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: 'Secondary Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: '', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
        ],
        code: [{ title: 'this is an example', url: 'https://gist.github.com/buddyeorl/501fa84ff89df13f04af531ed46e8da6.js' }],
        link: 'https://www.katena.com',
        //everything that goes after the main content
        order: [{ type: 'paragraph', index: 0 }, { type: 'image', index: 0 }, { type: 'code', index: 0 }, { type: 'paragraph', index: 1 }, { type: 'technologies' }, { type: 'link' }]
    },
    recipeFinder: {
        url: '/projects/recipe-finder',

        main: {
            title: 'Recipe Finder',
            duty: 'Back End developer',
            description: 'Continuity of institutional knowledge tool',
            content: 'I expanded the component library, My goal was to keep things simple and flexible to ensure that it would actually be used',
            image: '../recipeFinder.png'
        },
        images: ['../recipeFinder.png'],
        technologies: ['JS', 'NodeJS', 'Jquery', 'ExpressJS', 'IBM Watson API', 'Wikipedia API', 'Yummly API'],
        paragraph: [
            { title: 'First Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: 'Secondary Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: '', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
        ],
        code: [{ title: 'this is an example', url: 'https://gist.github.com/buddyeorl/501fa84ff89df13f04af531ed46e8da6.js' }],
        link: 'https://whatthefork.herokuapp.com/home.html',
        //everything that goes after the main content
        order: [{ type: 'paragraph', index: 0 }, { type: 'image', index: 0 }, { type: 'code', index: 0 }, { type: 'paragraph', index: 1 }, { type: 'technologies' }, { type: 'link' }]
    },
    firstPortfolio: {
        url: '/projects/firstPortfolio',

        main: {
            title: 'First Portfolio - Open Source',
            duty: 'Back End developer',
            description: 'Continuity of institutional knowledge tool',
            content: 'I expanded the component library, My goal was to keep things simple and flexible to ensure that it would actually be used',
            image: '../firstPortfolio.png'
        },
        images: ['../firstPortfolio.png'],
        technologies: ['JS', 'NodeJS', 'Jquery', 'Giphy API'],
        paragraph: [
            { title: 'First Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: 'Secondary Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: '', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
        ],
        code: [{ title: 'this is an example', url: 'https://gist.github.com/buddyeorl/501fa84ff89df13f04af531ed46e8da6.js' }],
        link: 'https://alexdatavault.herokuapp.com/',
        //everything that goes after the main content
        order: [{ type: 'paragraph', index: 0 }, { type: 'image', index: 0 }, { type: 'code', index: 0 }, { type: 'paragraph', index: 1 }, { type: 'technologies' }, { type: 'link' }]
    },
    portfolio: {
        url: '/projects/portfolio',

        main: {
            title: 'Improved Portfolio - Open Source',
            duty: 'Back End developer',
            description: 'Continuity of institutional knowledge tool',
            content: 'I expanded the component library, My goal was to keep things simple and flexible to ensure that it would actually be used',
            image: '../portfolio.png'
        },
        images: ['../portfolio.png'],
        technologies: ['JS', 'NodeJS', 'ReactJS'],
        paragraph: [
            { title: 'First Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: 'Secondary Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: '', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
        ],
        code: [{ title: 'this is an example', url: 'https://gist.github.com/buddyeorl/501fa84ff89df13f04af531ed46e8da6.js' }],
        link: 'https://buddyeorl.github.io/GifTastic/',
        //everything that goes after the main content
        order: [{ type: 'paragraph', index: 0 }, { type: 'image', index: 0 }, { type: 'code', index: 0 }, { type: 'paragraph', index: 1 }, { type: 'technologies' }, { type: 'link' }]
    },
    giftastic: {
        url: '/projects/giftastic',

        main: {
            title: 'Giftastic',
            duty: 'Back End developer',
            description: 'Continuity of institutional knowledge tool',
            content: 'I expanded the component library, My goal was to keep things simple and flexible to ensure that it would actually be used',
            image: '../giftastic.png'
        },
        images: ['../giftastic.png'],
        technologies: ['JS', 'NodeJS', 'Jquery', 'Giphy API'],
        paragraph: [
            { title: 'First Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: 'Secondary Title', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
            { title: '', content: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
        ],
        code: [{ title: 'this is an example', url: 'https://gist.github.com/buddyeorl/501fa84ff89df13f04af531ed46e8da6.js' }],
        link: 'https://buddyeorl.github.io/GifTastic/',
        //everything that goes after the main content
        order: [{ type: 'paragraph', index: 0 }, { type: 'image', index: 0 }, { type: 'code', index: 0 }, { type: 'paragraph', index: 1 }, { type: 'technologies' }, { type: 'link' }]
    }

}

//add navigation:{back, forward} property to shortProjects object, the navigation are the urls to be used on the back and next button in the ProjectPage component, by default the navigation will be added based on the order of project objects above:
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

export default shortProjects;