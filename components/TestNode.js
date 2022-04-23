import React, { useEffect, useState } from 'react'

const TestNode = ({testUrl}) => {

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
            if (resp.status >= 200){ setFstate(true); }
            else { setFstate(false); }

        } catch (error) {
            console.error(testUrl, fstate, error);
            setFstate(false);
        }
        setTime(timeMetrics);
    },[]);

    if (fstate === null || time === null){
        return ("...")
    }
    else if (fstate === true){
        return (`🟢 ${(time?.duration).toFixed(0)}ms`)
    }
    else if(fstate === false){
        return (`🔴 ${(time?.duration).toFixed(0)}ms`)
    }
}

export default TestNode
