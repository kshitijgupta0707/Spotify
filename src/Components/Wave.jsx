import { Color } from 'p5'
import React from 'react'
import WaveSurfer from 'wavesurfer.js'
import { songsData } from '../assets/assets'
import { useSearchParams } from 'react-router-dom'
import { useState, useCallback, useRef, useMemo } from 'react'
import { useWavesurfer } from '@wavesurfer/react'
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js'


const formatTime = (seconds) => [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':')

const Wave = () => {
    const containerRef = useRef(null)
    const [urlIndex, setUrlIndex] = useState(0)
    const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
        container: containerRef,
        height: 100,
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        url: songsData[urlIndex].file,
        plugins: useMemo(() => [Timeline.create()], []),
    })
    const onUrlChange = useCallback(() => {
        setUrlIndex((index) => (index + 1) % songsData.length)
    }, [])
    const onPlayPause = useCallback(() => {
        wavesurfer && wavesurfer.playPause()
    }, [wavesurfer])
    return (
        <>
            <div ref={containerRef} ></div>
            <p>Current audio: {songsData[urlIndex].file}</p>
            <p>Current time: {formatTime(currentTime)}</p>
            <div style={{ margin: '1em 0', display: 'flex', gap: '1em' }}>
                <button onClick={onUrlChange}>Change audio</button>

                <button onClick={onPlayPause} style={{ minWidth: '5em' }}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        </>
    )
}

export default Wave