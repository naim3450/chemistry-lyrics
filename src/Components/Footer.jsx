// ... existing code ...
import { useContext, useEffect, useRef, useState } from 'react'
import { IconButton, Slider } from '@mui/material'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import { FastForward, FastRewind } from '@mui/icons-material'
import shaky from '../../public/shaky.mp3'
import Fell_For_You from '../../public/Fell_For_You.mp3'
import { formatTime } from '../../utils/formatTime'
import LyricsContext from '../Context/LyricsContext'

const Footer = () => {

    const songRef = useRef(null);
    const { searchAudioName, audioCurrentTime } = useContext(LyricsContext);

    const musicList = [
        { name: "shaky", audio: shaky, },
        { name: "Fell_For_You", audio: Fell_For_You, },
    ];

    let [index, setindex] = useState(0);

    // Dummy state for play/pause and progress
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(20);

    useEffect(() => {
        let song = songRef.current;

        function handleTimeUpdate() {
            setProgress(song.currentTime);
        }
        function handleLoadedMetadata() {
            setDuration(song.duration)
        }

        song.addEventListener('timeupdate', handleTimeUpdate)
        song.addEventListener('loadedmetadata', handleLoadedMetadata)

        songRef.current.volume = volume / 100;

        return () => {
            song.removeEventListener('timeupdate', handleTimeUpdate);
            song.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
    }, []);

    useEffect(() => {
        if (songRef.current) {
            songRef.current.load();     // Reload new audio source
            if (playing) {
                songRef.current.play();     // Auto play
            }
        }
    }, [index]);

    const changeProgress = (e) => {
        songRef.current.currentTime = e.target.value;
        setProgress(e.target.value);
    }

    const handleRewind = () => {
        let newTime = Math.max(songRef.current.currentTime - 2)
        songRef.current.currentTime = newTime
        setProgress(newTime);
    }

    const handleForWard = () => {
        let newTime = Math.max(songRef.current.currentTime + 2)
        songRef.current.currentTime = newTime
        setProgress(newTime);
    }


    const playPus = () => {
        if (playing) {
            songRef.current.pause()
        }
        else {
            songRef.current.play()
        }
        setPlaying(!playing);
    }

    const handleVolumeChange = (e) => {
        songRef.current.volume = parseFloat(e.target.value) / 100;
        setVolume(parseFloat(e.target.value));
    }


    useEffect(() => {
        audioCurrentTime(progress, musicList[index].name);
        if (progress == duration) {
            setPlaying(false)
        }
    }, [progress])

    useEffect(() => {
        // setPlaying(!playing);
        const findIndex = musicList?.findIndex((el) => el?.name?.toLowerCase() === searchAudioName.toLowerCase());
        if (findIndex == -1) setindex(0);
        else { setindex(findIndex); songRef.current.play(); setPlaying(true) };
    }, [searchAudioName])

    return (
        <div className="">
            <footer className="bg-[#18181b] h-24 flex items-center px-8 shadow-inner border-t border-[#232526] rounded-t-3xl">
                <div className="flex items-center gap-8 w-full">
                    <audio className='hidden' ref={songRef} controls>
                        <source src={musicList[index]?.audio} />
                    </audio>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        <IconButton onClick={() => setindex(index - 1)}>
                            <SkipPreviousIcon sx={{ color: "#b0b0b0" }} />
                        </IconButton>
                        <IconButton onClick={handleRewind}>
                            <FastRewind sx={{ color: "#b0b0b0" }} />
                        </IconButton>

                        <IconButton
                            sx={{
                                background: "#2563eb",
                                color: "#fff",
                                boxShadow: "0 2px 8px 0 #2563eb33",
                                '&:hover': { background: "#1d4ed8" }
                            }}
                            onClick={playPus}
                        >
                            {playing ? <PauseIcon /> : <PlayArrowIcon />}
                        </IconButton>

                        <IconButton onClick={handleForWard}>
                            <FastForward sx={{ color: "#b0b0b0" }} />
                        </IconButton>
                        <IconButton onClick={() => setindex(index + 1)}>
                            <SkipNextIcon sx={{ color: "#b0b0b0" }} />
                        </IconButton>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex-1 flex items-center gap-3 mx-4">
                        <span className="text-xs text-gray-400 font-mono w-12 text-right">{formatTime(progress)}</span>
                        <Slider
                            value={progress}
                            max={duration}
                            onChange={changeProgress}
                            sx={{
                                color: "#2563eb",
                                height: 4,
                                '& .MuiSlider-thumb': {
                                    width: 14,
                                    height: 14,
                                    backgroundColor: '#fff',
                                    border: '2px solid #2563eb',
                                }
                            }}
                        />
                        <span className="text-xs text-gray-400 font-mono w-12">{formatTime(duration)}</span>
                    </div>

                    {/* Volume */}
                    <div className="flex items-center gap-2 w-32">
                        <VolumeUpIcon sx={{ color: "#b0b0b0", fontSize: 20 }} />
                        <Slider
                            value={volume}
                            onChange={handleVolumeChange}
                            step={1}
                            min={0}
                            max={100}
                            sx={{
                                color: "#2563eb",
                                height: 2,
                                '& .MuiSlider-thumb': {
                                    width: 10,
                                    height: 10,
                                    backgroundColor: '#fff',
                                    border: '1px solid #2563eb',
                                }
                            }}
                        />
                    </div>
                </div>
            </footer>

            {/* <div className="">
                <input onChange={(_, v) => setProgress(v)} type="range" id='progress' value={progress} />
            </div> */}
        </div>
    )
}

export default Footer