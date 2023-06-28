import React from 'react'
import './SCSS/Timeline.scss'

const Timeline = ({ timelineData }) => {

    // if (!timelineData) {
    //     return <div>No timeline data available.</div>;
    // }

    // const branches = timelineData.reduce((acc, game) => {
    //     if (!acc[game.branch]) {
    //         acc[game.branch] = [];
    //     }
    //     acc[game.branch].push(game);
    //     return acc;
    // }, {});

    return (
        <div className='Timeline'>
            <h1>Timeline</h1>
            <p>This is a fictional chronology of The Legend of Zelda series.</p>
            <img src='https://cdn.vox-cdn.com/uploads/chorus_asset/file/24468845/The_Legend_of_Zelda_series_timeline.png' alt='timeline chart'/>
{/* 
            {Object.entries(branches).map(([branch, games]) => (
                <div key={branch} className="branch">
                    <h2>{branch}</h2>
                    {games.map((game) => (
                        <li key={game.id}>{game.title}</li>
                    ))}
                </div>
            ))} */}
        </div>
    )
}

export default Timeline