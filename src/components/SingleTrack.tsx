import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

interface Props {
    imgPath: string;
    audioPath: string;
    margin: string;
    active: boolean;
    onClick: () => void
}

export const SingleTrack = (props: Props) => {
    const { imgPath, audioPath, margin, active, onClick } = props;

    const [play, { stop, sound }] = useSound(audioPath, { interrupt: false });

    useEffect(() => {
        active ? play() : stop();
    });

    return (
        <div className={active ? 'SingleTrack active' : 'SingleTrack'} style={{marginTop: margin }} onClick={onClick} >
            <img className="main" src={ imgPath } alt="earphones"/>
        </div>
    )
}