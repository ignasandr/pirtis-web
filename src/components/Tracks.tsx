import React, { useState } from 'react'
import { SingleTrack } from './SingleTrack'


interface Props {}

const imgPaths = ["./img/ausine1.png", "./img/ausine2.png", "./img/ausine3.png", "./img/ausine1.png", "./img/ausine2.png", "./img/ausine3.png"];
const audioPaths = ["./mp3/1.mp3", "./mp3/2.mp3", "./mp3/3.mp3", "./mp3/4.mp3", "./mp3/5.mp3", "./mp3/6.mp3"];
const margins = ["100px", "300px", "100px", "300px", "100px", "300px"];

function Tracks(props: Props) {
    // const {} = props
    const [chosen, setChosen] = useState<number>();
    const tracks = [1, 2, 3, 4, 5, 6];

    const handleClick = (t: number ) => {
        t === chosen ? setChosen(0) : setChosen(t);
        //
    }

    return (
        <div className="Tracks">        
            {tracks.map(t => (
                <SingleTrack
                    key={t}
                    imgPath={imgPaths[t-1]} 
                    audioPath={audioPaths[t-1]}
                    margin={margins[t-1]}
                    active={t === chosen}
                    onClick={() => handleClick(t)}
                />
             ))}
        </div>
    )
}

export default Tracks
