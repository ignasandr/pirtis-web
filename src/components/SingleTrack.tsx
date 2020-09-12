import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

interface Props {
    id: number;
    imgPath: string;
    audioPath: string;
    active: boolean;
    onClick: () => void
}

export const SingleTrack = (props: Props) => {
    const { id, imgPath, audioPath, active, onClick } = props;

    const [play, { stop, sound }] = useSound(audioPath, { interrupt: false });

    const divId = "track" + id.toString()
    useEffect(() => {
        active ? play() : stop();
    });

    return (
        <div id={divId} className={active ? 'SingleTrack active' : 'SingleTrack'} onClick={onClick} >
            <img className="main" src={ imgPath } alt="earphones"/>
        </div>
    )
}