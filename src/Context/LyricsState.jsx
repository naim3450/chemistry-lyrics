import React, { useReducer } from 'react'
import LyricsContext from './LyricsContext'
import { reducer } from './reducer'


const initialState = {
    currentTimeMs: 0,
    audioName: '',
    searchAudioName: '',
}

const LyricsState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const audioCurrentTime = (currentTime, audioName) => {
        dispatch({
            type: "audio_time_update",
            payload: { currentTime, audioName }
        })
    }
    const searchAudio = (audioName) => {
        dispatch({
            type: "search_audio",
            payload: audioName
        })
    }

    return (
        <LyricsContext.Provider value={{ ...state, audioCurrentTime, searchAudio }}>
            {children}
        </LyricsContext.Provider>
    )
}

export default LyricsState