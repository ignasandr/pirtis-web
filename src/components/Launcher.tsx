import React from 'react';
import { PlayFunction } from 'use-sound/dist/types';

interface Props {
    imgPath: string,
    play: PlayFunction,
    stop: (id?: string | undefined) => void,
    isPlaying: boolean
}

function Launcher(props: Props) {
    const { imgPath, play, stop, isPlaying } = props

    return (
        <div className="Launcher"> 
            <img src={ imgPath } onClick={() => play} alt="earphones"/>
        </div>
    )
}

export default Launcher
