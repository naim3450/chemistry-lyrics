import React, { useReducer } from 'react'
import LyricsContext from './LyricsContext'
import { reducer } from './reducer'


const initialState = {
    currentTimeMs: 0,
    audioName: ''
}

const LyricsState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const audioCurrentTime = (currentTime, audioName) => {
        dispatch({
            type: "audio_time_update",
            payload: { currentTime, audioName }
        })
    }

    return (
        <LyricsContext.Provider value={{ ...state, audioCurrentTime }}>
            {children}
        </LyricsContext.Provider>
    )
}

export default LyricsState