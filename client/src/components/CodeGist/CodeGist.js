import React, { useRef, useState } from 'react';

//Unlike other gist components outthere, this component will wrap the total gist Height 
//Renders a Code snippet using github gists, useful to display code fragments, markdowns or any format supported by github gists
const CodeGist = ({ children, url }) => {
    const myRef1 = useRef(null);
    const [frameHeight, setFrameHeight] = useState('500px');

    let srcdoc =
        '<html> <style type="text/css">body {margin:5px 0px; padding-top:20px;}.blob-wrapper {padding-bottom:20px; padding-top:20px; overflow-x:auto;overflow-y:hidden;}</style><body><script src="' + url + '"></script><body></html>'

    return (
        <React.Fragment>
            {children && children}
            <iframe ref={myRef1} onLoad={() => setFrameHeight(myRef1 && myRef1.current && myRef1.current.contentDocument && myRef1.current.contentDocument.body.clientHeight)} frameBorder={0} style={{ minWidth: '200px', width: '100%', maxWidth: '720px', height: `${frameHeight - 36 + 'px'}` }} scrolling="no" seamless="seamless"
                srcDoc={srcdoc}
            />
        </React.Fragment>
    )
}

export default CodeGist;