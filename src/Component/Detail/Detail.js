import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const [team, setTeam] = useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?${idTeam}`;
        fetch(url)
        .then(response=> response.json())
        .then(data=> setTeam(data))
    },[])
    const {idTeam} = useParams();
    return (
        <div>
            <h1>This is details page {idTeam}</h1>
        </div>
    );
};

export default Detail;