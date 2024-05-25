'use client'

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) =>{

    const [isOpen, setisOpen] = useState(true)

    const handleVideoPlayer = () => {
        setisOpen((prevState) => !prevState)
    }

    const option = {
        width : "300",
        height : "250"
    }

    const Player = () =>{
        return(
    
            <div className="fixed bottom-2 right-2">
                <button
                onClick={handleVideoPlayer}
                className="text-color-primary float-right bg-color-secondary px-3 mb-1">
                    X
                </button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={() => alert("Yahh... Video Trailernya Rusak")}
                />
            </div>
            
        )
    }

    const ButtonOpenTrailer = () =>{
        return(
            <button 
            onClick={handleVideoPlayer}
            className="fixed bottom-4 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl">
               Tonton Trailer
           </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer />

}

export default VideoPlayer