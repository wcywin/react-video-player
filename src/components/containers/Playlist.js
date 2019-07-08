import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../NightMode';
import StyledPlaylist from '../styles/StyledPlaylist.js'

const Playlist = props => {
    return (
        <StyledPlaylist>
            <NightMode />
            <PlaylistHeader />
            <PlaylistItems />
        </StyledPlaylist>
    )
};

export default Playlist;