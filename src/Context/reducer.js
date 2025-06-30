export const reducer = (state, action) => {
    if (action.type === "audio_time_update") {
        const { currentTime, audioName } = action.payload

        return {
            ...state,
            currentTimeMs: currentTime * 1000,
            audioName: audioName
        }
    }
    if (action.type === "search_audio") {
        const audioName = action.payload
        return {
            ...state,
            searchAudioName: audioName,
        }
    }
    return state
}