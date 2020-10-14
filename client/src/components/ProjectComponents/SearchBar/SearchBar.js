import React, { useState, useEffect } from 'react'

//material ui imports
import IconButton from '@material-ui/core/IconButton';


//materialui icons
import SearchIcon from '@material-ui/icons/Search';

//handleForm
import useHandleForm from './useHandleForm'


//import data
//import data from './data'


const HoveredItem = ({ item, cbGetResults = () => { return }, handleInputChange = () => { return } }) => {
    const [onHover, setOnHover] = useState(false)
    //console.log(item)
    return (
        <li
            key={item}
            style={{ listStyleType: 'none', paddingLeft: '40px', fontWeight: onHover ? 500 : 400, color: 'blue', fontSize: '12px', cursor: 'pointer', backgroundColor: onHover ? 'aliceblue' : 'white' }}
            onClick={(e) => {
                e.preventDefault();
                handleInputChange();
                cbGetResults();
            }}

            onMouseEnter={(e) => {
                e.preventDefault();
                setOnHover(true)
            }}
            onMouseLeave={(e) => {
                e.preventDefault();
                setOnHover(false)
            }}
        >{item}</li>
    )
}




let clearFunction = () => { }
let controller = new AbortController();
let signal = controller.signal;
const SearchBar = ({ width = 400, cbGetResults = () => { } }) => {
    let initialInputState = { searchInput: '' } // needed for a controlled input component
    const { input, handleChange } = useHandleForm(initialInputState) //Initial state will set textField inputs as controlled components.
    // const [border, setBorder] = useState('transparent')
    const [border, setBorder] = useState('dodgerblue')
    const [click, setClick] = useState(false)
    const [prefill, setPrefill] = useState([])
    const [removeBorder, setRemoveBorder] = useState(true)
    const [searchQuery, setSearchQuery] = useState({})
    const [loading, setLoading] = useState(false);

    //when search query has been set and it has at least a paramenter, sendFormA will be triggered
    useEffect(() => {
        if (Object.keys(searchQuery).length > 0) {
            sendFormA();
        }
    }, [searchQuery])




    const sendFormA = () => {
        //reset searchQuery
        setSearchQuery({});
    }


    const sendForm1 = async (queryArray = ['one', 'two', 'three'], mySignal) => {
        setLoading(true);

        const url = `https://api-machinerypal.herokuapp.com/api/equipmentLookup?${queryArray}`
        //const url = 'http://localhost:3002/api/getDistance/zipcode?zipcode1=98006&zipcode2=33014&unit=M'
        const method = 'GET'
        // const myHeaders = new Headers();
        // myHeaders.append('Content-Type', 'application/json');
        // myHeaders.append('Accept', 'application/json');
        // myHeaders.append('Origin', 'http://localhost:3001');
        const request = {
            method: method,
            //headers: myHeaders,
            mode: 'cors',
            signal: mySignal,
        }
        await fetch(url, request)
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response)
                setPrefill(response.data);
                setClick(true);
                setLoading(false);
            })
            .catch(error => {
                setPrefill();
                setClick(false)
                setLoading(false);
            });
        return
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        controller.abort();
        controller = new AbortController();
        signal = controller.signal;
        // reset delay
        // clearTimeout(clearFunction);
        handleChange(e);

        if (e.target.value.trim().replace(/\s\s+/g, ' ').split(" ").some((item) => item.length >= 3)) {
            //trim and replace multiple white spaces with single spaces
            let tempArray = e.target.value.trim().replace(/\s\s+/g, ' ').split(" ")
            //let tempQuery = 'search=' + e.target.value.trim().replace(regex, ' ').replaceAll(" ", "&search=");
            let tempQuery = 'search=' + e.target.value.trim().replace(/\s\s+/g, ' ').replace(/\s/g, "&search=");

            if (tempArray.length > 0 && tempArray.some(item => item.length > 2)) {
                //setPrefill(searchInput(e.target.value));
                setPrefill(sendForm1(tempQuery, signal));
            } else {
                setPrefill();
                setClick(false)
            }

        } else {
            setPrefill();
            setClick(false)
        }

    }



    const handleMouseEnter = (e) => {
        e.preventDefault();
        if (document.activeElement !== e.target) {
            setBorder('darkgray')
        }
    }

    const handleMouseLeave = (e) => {
        e.preventDefault();
        if (document.activeElement !== e.target) {
            //setBorder('transparent')
            setBorder('dodgerblue')
        }
    }

    const handleFocus = (e) => {
        e.preventDefault();
        setBorder('dodgerblue')
    }
    //console.log(input)

    return (

        <React.Fragment>





            <div style={{ display: 'grid', justifySelf: 'center', alignSelf: 'center', marginTop: '10px', marginBottom: '10px', paddingBottom: '5px', width: '100%' }}>



                <form style={{ width: '100%', display: 'inline-grid', gridTemplateColumns: width > 560 ? '60% 40px' : '85% 40px', margin: '0px 0px 0px 0px', alignSelf: 'center', justifyContent: 'center' }}>
                    {/* <form onSubmit={sendForm} style={{ width: '100%', display: 'inline-grid', gridTemplateColumns: '185px 75px', margin: '0px 0px 0px 20px' }}> */}
                    <input
                        style={{
                            WebkitAppearance: 'none', borderStyle: 'solid', WebkitBoxShadow: 'none', textAlign: 'center', MozBoxShadow: 'none', boxShadow: 'none', borderRadius: click ? '5px 0px 0px 0px' : '5px 0px 0px 5px', borderColor: `${click ? 'dodgerblue dodgerblue gray' : border}`, outline: 'none', borderWidth: '0px', fontSize: width > 560 ? '12px' : '16px', fontWeight: 400, color: 'black', height: '40px', width: '100%', maxWidth: '100%', paddingLeft: '15px', transition: 'width 1s', alignSelf: 'center', transition: 'border-color 0.7s ease 0s, border-radius 0.7s', borderWidth: '1px'
                        }}
                        value={input.searchInput}
                        name='searchInput'
                        placeholder="Search"
                        onChange={handleInputChange}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onFocus={(e) => {
                            //open search results  on click, usefull when input is blur and hide the results and show them again on click
                            if (input.searchInput.length > 3) {
                                setClick(true)
                            }
                            handleFocus(e);
                        }}
                        onBlur={(e) => {
                            //setClick(false);
                            handleMouseLeave(e);
                        }}
                        onClick={(e) => {
                            e.preventDefault();


                        }}
                        autocomplete="off"
                    />
                    <IconButton onClick={sendFormA} style={{ position: 'relative', height: '40px', borderRadius: `${click ? '0px 5px 0px 0px' : '0px 5px 5px 0px'}`, borderWidth: `1px 1px 1px 0px`, borderColor: `${click ? 'lightgray' : 'lightgray'}`, borderStyle: 'solid', fontSize: '12px', backgroundColor: 'ghostwhite', color: 'lightslategray' }}>
                        <SearchIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                </form>

                {/* <IconButton onClick={sendForm} style={{ position: 'relative', height: '36px', top: '-38px', right: '-106px', borderRadius: '5px', fontSize: '14px', backgroundColor: 'aliceblue', }}>
                    <SearchIcon style={{ fontSize: '16px' }} />
                    Search
                </IconButton> */}



                <div
                    style={{ width: width > 560 ? 'calc(60% + 40px)' : 'calc(85% + 40px)', boxShadow: '0px 2px 6px -3px', borderRadius: '5px', top: '5px', marginLeft: '0px', height: `${click ? '100px' : '0px'}`, position: 'relative', backgroundColor: 'white', overflow: click ? 'scroll' : 'hidden', borderWidth: `${removeBorder ? (click ? '0px 1px 1px 1px' : '0px') : '0px 1px 1px 1px'}`, borderStyle: 'none', borderColor: 'dodgerblue', transition: 'height 0.5s', zIndex: 5, display: 'grid', justifySelf: 'center' }}
                    onClick={(e) => {
                        e.preventDefault();
                        setClick(false);
                    }}
                    onTransitionEnd={(e) => {
                        e.preventDefault();
                        //scroll should be at the top when opened
                        e.target.scrollTop = 0
                        if (click) {
                            setRemoveBorder(false)
                        } else {
                            setRemoveBorder(true)
                        }

                    }}
                >


                    {/* NEW EQUIPMENT LOOKUPY FROM API */}
                    {prefill && Object.keys(prefill).length > 0 &&
                        Object.keys(prefill).map((make, index) => (
                            <li style={{ listStyleType: 'none', textAlign: 'left', padding: '0px', marginBottom: 0, fontWeight: 500 }} key={index}>
                                {/* ===========MAKE ========= */}
                                <p style={{ paddingLeft: '10px', marginTop: '5px', marginBottom: '5px' }}>{make}</p>
                                <ul style={{ listStyleType: 'none', padding: 0, marginTop: '5px', marginBottom: '5px' }}>
                                    {/* ===========ITEMS INSIDE MAKE OBJECT ========= */}
                                    {Object.keys(prefill[make]).map(model =>
                                        <HoveredItem
                                            key={make + model}
                                            item={<React.Fragment>
                                                <span style={{ verticalAlign: 'middle', fontSize: '13px', lineHeight: '25px' }}>
                                                    {model}
                                                </span></React.Fragment>}
                                            cbGetResults={() => {
                                                setSearchQuery({
                                                    make: make,
                                                    model: model,
                                                    category: prefill[make][model].category,
                                                    type: prefill[make][model].type,
                                                })
                                                cbGetResults({
                                                    make: make,
                                                    model: model,
                                                    category: prefill[make][model].category,
                                                    type: prefill[make][model].type,
                                                });
                                            }}
                                            handleInputChange={() => {
                                                handleChange({
                                                    persist: () => { return }, preventDefault: () => { return },
                                                    target: {
                                                        name: 'searchInput',
                                                        value: make + ' ' + model + ' ' + prefill[make][model].category
                                                    }
                                                })
                                            }}
                                        />
                                    )}
                                </ul>
                            </li>
                        ))
                    }

                </div>
            </div>
        </React.Fragment>

    )
}

export default SearchBar;


