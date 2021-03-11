import React from 'react';
import './Home.css';
import Body from '../Body/Body';
import Team from '../Team/Team';



const Home = () => {
    return (
        <div className="main-container">
            <Body></Body>
            <Team></Team>
        </div>
    );
};

export default Home;