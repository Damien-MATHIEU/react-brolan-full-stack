import React from 'react'
import '../styles/VideoPresentation.css'

function VideoTrailer() {
    return (
        <div className="home_container">
            <h2 className="home_catch_phrase">Trailer</h2>
            <div className="video_text_container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/J3zEzuxU8w8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default VideoTrailer
