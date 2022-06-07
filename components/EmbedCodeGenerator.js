import React, { useState } from 'react'
import copyToClipboard from 'utils/clipboard';
import Callout from 'nextra-theme-docs/callout'
import CodeBox from './CodeBox'

const EmbedCodeGenerator = ({kind="default", defaultData=`Start by Entering a URL and ThreadId`, threadIdPrompt = "threadId", defaultUrl=undefined}) => {

    let [data, setData] = useState(defaultData);
    let [error, setError] = useState(false);

    function updateData(){
        try {
            let url = document.getElementById('url').value;
            let threadId = document.getElementById('threadId').value;

            if (url.split() == '' && threadId.split() == ""){
                setData(`Start by Entering a URL and ThreadId`);
            }

            setError(false);
            setData(`<iframe id="convo" src="https://theconvo.space/embed/dt?${url ? 'url=' + encodeURIComponent(url) : ""}${threadId ? '&threadId='+threadId : ""}" allowtransparency="true" width="100%" height="600px" style="border: none;">Comments </iframe>`)
        } catch (error) {
            setError(error);
        }

    }

    function updateBlogLink(e){
        try {
            let postUrl = e.currentTarget.value;

            try {
                let urlObj = new URL(postUrl);
                let url = urlObj.origin;
                let pathData = urlObj.pathname.split('/');
                let threadId = pathData[pathData.length-2];
                setError(false);
                setData(`<iframe src="https://theconvo.space/embed/dt?${url ? 'url=' + encodeURIComponent(url) : ""}${threadId ? '&threadId='+threadId : ""}" id="convo" allowtransparency="true" width="100%" height="600px" style="border: none;">Comments</iframe>`)
            } catch (error) {
                setError('Invalid URL');
            }

        } catch (error) {
            setError(error);
        }

    }

    if (kind === 'ghost'){

        return (
            <div style={{position:"relative", display: "block"}} className="codebox">
                {
                    error && (
                        <Callout type="error" emoji="🚨">
                            {error}
                        </Callout>
                    )
                }
                <br/>
                <input type="text"
                    onChange={updateBlogLink}
                    defaultValue="https://balajis.com/the-network-state-book-a-crosspost/"
                    className="gloassarySearchBox" placeholder="Blog URL"
                    style={{padding: '10px', width: '300px'}}
                    />
                <br/>
                <CodeBox>
                    <pre>
                        {data}
                    </pre>
                </CodeBox>
            </div>
        )
    }
    else {
        return (
            <div style={{position:"relative", display: "block"}} className="codebox">
                {
                    error && (
                        <Callout type="error" emoji="🚨">
                            {error}
                        </Callout>
                    )
                }
                <br/>
                <input type="text"
                    onChange={updateData}
                    id='url'
                    defaultValue={defaultUrl}
                    className="gloassarySearchBox" placeholder="URL of the Website"
                    style={{padding: '10px'}}
                    />
                <br/>
                <input type="text"
                    onChange={updateData}
                    id='threadId'
                    className="gloassarySearchBox" placeholder={threadIdPrompt}
                    style={{padding: '10px'}}
                />
                <br/>
                <CodeBox>
                    <pre>
                        {data}
                    </pre>
                </CodeBox>
            </div>
        )
    }

}

export default EmbedCodeGenerator
