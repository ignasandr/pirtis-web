import React, { useState } from 'react'
import { SingleTrack } from './SingleTrack'


interface Props {}

const imgPaths = ["./img/ausine1.png", "./img/ausine2.png", "./img/ausine3.png", "./img/ausine4.png", "./img/ausine5.png", "./img/ausine6.png"];
const audioPaths = ["./mp3/1.mp3", "./mp3/2.mp3", "./mp3/3.mp3", "./mp3/4.mp3", "./mp3/5.mp3", "./mp3/6.mp3"];

function Tracks(props: Props) {
    const [chosen, setChosen] = useState<number>();
    const tracks = [1, 2, 3, 4, 5, 6];

    const handleClick = (t: number ) => {
        t === chosen ? setChosen(0) : setChosen(t);
    }

    return (
        <div className="Tracks">        
            {tracks.map(t => (
                <SingleTrack
                    key={t}
                    id={t}
                    imgPath={imgPaths[t-1]} 
                    audioPath={audioPaths[t-1]}
                    active={t === chosen}
                    onClick={() => handleClick(t)}
                />
             ))}
        </div>
    )
}

export default Tracks
