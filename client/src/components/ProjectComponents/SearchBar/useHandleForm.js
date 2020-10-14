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
        // use of event.persist() use event asynchronously, remove event from the pool and allow references to be retained in the code
        event.persist()
        if (event.target.type === 'checkbox') {
            setInput({ ...input, [event.target.name]: event.target.checked })
        } else {
            if (event.target.files) {
                if (inputFiles[event.target.name].length > 0) {
                    setInputFiles({ [event.target.name]: [...inputFiles[event.target.name], ...event.target.files] })
                } else {
                    setInputFiles({ [event.target.name]: [...event.target.files] })
                }
            } else {
                setInput({ ...input, [event.target.name]: event.target.value })
            }
        }
    }

    const fillInputs = (data) => {
        setInput({ ...data, fileInput: '' });
        setInputFiles({ fileInput: [] });
    }

    const removeFiles = (indexArray) => {
        setInputFiles({ fileInput: inputFiles.fileInput.filter((item, index) => !indexArray.includes(index)) })
    }

    return { input, inputFiles, handleSubmit, handleChange, fillInputs, removeFiles }
}

export default useHandleForm;
