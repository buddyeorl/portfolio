import { useState } from 'react'

const useHandleForm = (initialState = {}) => {
    const [input, setInput] = useState(initialState);
    //keep the files stored and allow additional inputs to be added before submit
    const [inputFiles, setInputFiles] = useState({ fileInput: [] });

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        //reset form inputs to the initial state
        fillInputs(initialState);
    }
    const handleChange = (event) => {
        console.log('input changed')
        // use of event.persist() use event asynchronously, remove event from the pool and allow references to be retained in the code
        event.persist()
        if (event.target.type === 'checkbox') {
            setInput({ ...input, [event.target.name]: event.target.checked })
        } else {
            if (event.target.files) {
                console.log('got files')
                if (inputFiles[event.target.name].length > 0) {
                    setInputFiles({ [event.target.name]: [...inputFiles[event.target.name], ...event.target.files] })
                } else {
                    setInputFiles({ [event.target.name]: [...event.target.files] })
                }
                console.log(inputFiles)
            } else {
                console.log('got info')
                setInput({ ...input, [event.target.name]: event.target.value })
            }
        }
    }

    const fillInputs = (data) => {
        console.log(data)
        console.log('filling inputs')
        setInput({ ...data, fileInput: '' });
        setInputFiles({ fileInput: [] });
    }

    const removeFiles = (indexArray) => {
        console.log('trying to delete file from input');
        console.log(indexArray)
        setInputFiles({ fileInput: inputFiles.fileInput.filter((item, index) => !indexArray.includes(index)) })
    }

    return { input, inputFiles, handleSubmit, handleChange, fillInputs, removeFiles }
}

export default useHandleForm;
