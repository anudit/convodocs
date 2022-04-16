import React, { useEffect, useState } from 'react'

const TestNode = ({testUrl}) => {

    let [fstate, setFstate] = useState(null);
    let [time, setTime] = useState(0);

    useEffect(async ()=>{

        let timeOld = Date.now();
        try {

            let resp = await fetch(testUrl + "/comments?page=0&pageSize=10&latestFirst=true&apikey=CSCpPwHnkB3niBJiUjy92YGP6xVkVZbWfK8xriDO&threadId=KIGZUnR4RzXDFheXoOwo");
            let data = await resp.json();
            console.log(testUrl, resp.status, data);
            if (resp.status >= 200){ setFstate(true); }
            else { setFstate(false); }

        } catch (error) {
            console.error(testUrl, fstate, error);
            setFstate(false);
        }
        let timeDiff = Date.now() - timeOld;
        setTime(timeDiff);
    },[]);

    if (fstate === null){
        return ("...")
    }
    else if (fstate === true){
        return (`🟢 ${time}ms`)
    }
    else if(fstate === false){
        return (`🔴 ${time}ms`)
    }
}

export default TestNode
