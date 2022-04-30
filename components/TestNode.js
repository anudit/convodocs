import React, { useEffect, useState } from 'react'
import copyToClipboard from 'utils/clipboard'

const TestShell = ({children, testUrl, host}) => {

    const hn = new URL(testUrl).hostname;

    return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                color: "#eeeeeeee",
                justifyContent: "space-between",
                alignItems: "center",
                width: "max(380px, 25vw)",
                height: "60px",
                backgroundColor: "#0a09093d",
                borderRadius: "14px",
                backdropFilter: "blur(10px)",
                marginTop:"5px"
            }}>
                <div style={{
                    fontWeight: 600,
                    paddingLeft: "15px",
                    alignItems: "center",
                    display: "flex",
                    alignItems: "center",
                }}>
                    <button
                        className="copybutton"
                        style={{
                            marginRight: "10px",
                            position: "relative",
                            display: "flex",
                            top: "0px",
                            right: "0px",
                            background: "transparent"
                        }}
                        title="Copy Endpoint"
                        onClick={(e)=>{ copyToClipboard(testUrl, e.currentTarget) }}
                    >
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path fillRule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fillRule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                        </svg>
                    </button>
                    <span style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }}>{hn}</span>
                    <span style={{ fontWeight: 100, opacity: 0.4, fontStyle: "italic", paddingLeft: "3px"}}>({host})</span>
                </div>
                {children}
            </div>

    )
}

const TestNode = ({testUrl, host}) => {

    let [fstate, setFstate] = useState(null);
    let [time, setTime] = useState(null);

    useEffect(async ()=>{

        let timeMetrics;
        try {

            const reqUrl = testUrl + "/comments?page=0&pageSize=10&latestFirst=true&apikey=CSCpPwHnkB3niBJiUjy92YGP6xVkVZbWfK8xriDO&threadId=KIGZUnR4RzXDFheXoOwo";

            let resp = await fetch(reqUrl);
            let data = await resp.json();

            timeMetrics = window.performance.getEntriesByType("resource")
                                            .filter(n => n.initiatorType === "fetch")
                                            .filter(n => n.name === reqUrl)[0];

            console.log(testUrl, timeMetrics, resp.status, data);
            if (resp.status >= 200 && data.length === 10){ setFstate(true); }
            else { setFstate(false); }

        } catch (error) {
            console.error(testUrl, fstate, error);
            setFstate(false);
        }
        setTime(timeMetrics);
    },[]);

    if (fstate === null || time === null){
        return (
            <TestShell testUrl={testUrl} host={host}>
                <div style={{
                    minHeight: "100%",
                    alignItems: "center",
                    display: "flex",
                    paddingRight: "20px",
                    borderTopRightRadius: "14px",
                    borderBottomRightRadius: "14px",
                    opacity: 1
                }}>
                    ...
                </div>
            </TestShell>
        )
    }
    else if (fstate === true){
        return (
            <TestShell testUrl={testUrl} host={host}>
                <div style={{
                    minHeight: "100%",
                    background: "linear-gradient(270deg, rgba(15, 211, 114, 0.38) 0%, rgb(119 172 130 / 5%) 70%, rgb(255 255 255 / 0%) 100%)",
                    alignItems: "center",
                    display: "flex",
                    paddingRight: "15px",
                    borderTopRightRadius: "14px",
                    borderBottomRightRadius: "14px",
                    opacity: 1
                }}  title="Response Success">
                    {`${(time?.duration/1000).toFixed(2)}s 🟢`}
                </div>
            </TestShell>
        )
    }
    else if(fstate === false){
        return (
            <TestShell testUrl={testUrl} host={host}>
                <div style={{
                    minHeight: "100%",
                    background: "linear-gradient(270deg, rgba(211, 15, 15, 0.38) 0%, rgb(119 172 130 / 1%) 70%, rgba(255, 255, 255, 0) 100%)",
                    alignItems: "center",
                    display: "flex",
                    paddingRight: "15px",
                    borderTopRightRadius: "14px",
                    borderBottomRightRadius: "14px",
                    opacity: 1
                }}  title="Response Failed">
                    {`${(time?.duration/1000).toFixed(2)}s 🔴`}
                </div>
            </TestShell>
        )
    }
}

export default TestNode
