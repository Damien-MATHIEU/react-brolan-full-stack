import React from 'react'
import '../styles/VideoPresentation.css'

function VideoPresentation() {
  return (
    <div className="home_container">
      <h2 className="home_catch_phrase">Plus grande, Plus importante, Plus grandiose, Elle est de retour ...</h2>
      <div className="video_text_container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J65aTMvic6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className="video_text">La deuxième édition de l'année arrive à grand pas ...<br />
          Elle sera décisive dans l'obtention de son ticket pour l'édition en présentielle.<br />
          Le training sera de mise !</p>
      </div>
    </div>
  );
}

export default VideoPresentation;