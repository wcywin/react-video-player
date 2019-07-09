import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../NightMode';
import StyledPlaylist from '../styles/StyledPlaylist.js'

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => {
    return (
        <StyledPlaylist>
            <NightMode nightmodeCallback={nightModeCallback} nightMode={nightMode}/>
            <PlaylistHeader active={active} total={videos.length}/>
            <PlaylistItems videos={videos} active={active}/>
        </StyledPlaylist>
    )
};

export default Playlist;