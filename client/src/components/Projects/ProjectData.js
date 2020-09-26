const shortProjects = {
    machinerypal: {
        url: '/projects/machinerypal',
        title: 'Machinery Pal',
        name: 'Full Stack Developer',
        img: ['machinerypal.png', 'machinerypal.png'],
        displayDescription: 'Fleet Ecommerce  and Management app',
        shortDescription: 'I expanded the component library, My goal was to keep things simple and flexible to ensure that it would actually be used',
        longDescription1: '',
        longDescription2: '',
        externalUrl: 'https://www.machinerypal.com',
        technologies: ['JS', 'NodeJS', 'ReactJS', 'Redux', 'ExpressJS', 'PassportJS', 'Google Oauth', 'MongoDB']
    },
    katena: {
        url: '/projects/katena',
        title: 'Katena',
        name: 'Backend Developer',
        img: ['katena.png', 'katena.png'],
        displayDescription: 'Continuity of institutional knowledge tool',
        shortDescription: 'I worked on the app architecture and worked as a bridge between the front end and back end team, often solving problems on both sides',
        longDescription1: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.',
        longDescription2: '',
        externalUrl: 'https://www.katena.com',
        technologies: ['JS', 'NodeJS', 'ReactJS', 'Redux', 'ExpressJS', 'PassportJS', 'Google Oauth', 'MongoDB']
    },
    'zipcodes-pkg': {
        url: '/projects/zipcodes-pkg',
        title: 'Zipcode NPM package',
        name: 'Backend Developer',
        img: ['zipcodes-pkg.png', 'zipcodes-pkg.png'],
        displayDescription: 'LightWeight NPM package to lookup for zipcodes, cities, radius distance etc',
        shortDescription: 'I worked on the app architecture and worked as a bridge between the front end and back end team, often solving problems on both sides',
        longDescription1: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.',
        longDescription2: '',
        externalUrl: 'https://www.katena.com',
        technologies: ['JS', 'NodeJS', 'ReactJS', 'Redux', 'ExpressJS', 'PassportJS', 'Google Oauth', 'MongoDB']
    },
    'zipcodes-api': {
        url: '/projects/zipcodes-api',
        title: 'Zipcode Lookup API',
        name: 'Backend Developer',
        img: ['zipcodes-api.png', 'zipcodes-api.png'],
        displayDescription: 'Nodejs API to lookup for zipcode related information, including distances, cities within zip codes etc',
        shortDescription: 'I worked on the app architecture and worked as a bridge between the front end and back end team, often solving problems on both sides',
        longDescription1: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.',
        longDescription2: '',
        externalUrl: 'https://www.katena.com',
        technologies: ['JS', 'NodeJS', 'ReactJS', 'Redux', 'ExpressJS', 'PassportJS', 'Google Oauth', 'MongoDB']
    },
    'fleet-brand': {
        url: '/projects/fleet-brand',
        title: 'Zipcode Lookup API',
        name: 'Backend Developer',
        img: ['fleet-brand.png', 'fleet-brand.png'],
        displayDescription: 'Nodejs API to lookup for zipcode related information, including distances, cities within zip codes etc',
        shortDescription: 'I worked on the app architecture and worked as a bridge between the front end and back end team, often solving problems on both sides',
        longDescription1: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.',
        longDescription2: '',
        externalUrl: 'https://www.katena.com',
        technologies: ['JS', 'NodeJS', 'ReactJS', 'Redux', 'ExpressJS', 'PassportJS', 'Google Oauth', 'MongoDB']
    }
}

//add navigation:{back, forward} property to shortProjects object, the navigation are the url to be used on the back and next button in the ProjectPage component, by default the navigation will be added based on the order of project objects above:
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