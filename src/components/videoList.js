import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map(video => {
        return (
            <VideoListItem 
                onVideoSelect={onVideoSelect}
                key={video.id.videoId} 
                video={video} />
        )
    })

    return <div className="ui relaxed divided list">{videoItems}</div>
}

export default VideoList;