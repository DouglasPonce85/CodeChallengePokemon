import React from 'react';

import {
    AppWrapper,
    AppContainer,
    AlbumListContainer,
    AlbumCard,
    CodeChallengeLabel
} from './styledComponent';

class Album extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listAlbums: [],
            albumSelected: null
        };
    }

    componentDidMount() {
        this.loadAlbumPhotos();
    }

    getLast3Albums = (data) => {
        let index = 0;
        const lastAlbums = [];
        const arrLength = data.length

        for (index = data.length; index > arrLength - 3; index--) {
            const album = data[index - 1];
            lastAlbums.push(album);
        }

        return lastAlbums;
    }

    loadAlbumPhotos = () => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.setState({ listAlbums: this.getLast3Albums(data) });
            });
    }

    setAlbum = (album) => {
        if (!album)
            return;

        fetch(album.thumbnailUrl)
            .then(response => response.json())
            .then((data) => {
                this.setState({ albumSelected: data });
            });
    }

    renderAlbumData = (album) => {
        return (
            <AlbumCard key={album.id}>
                <h3>{album.title}</h3><br />
                <img src={album.thumbnailUrl} alt={album.title} />
            </AlbumCard>
        );
    }

    isAlbumSet = () => {
        return this.state.albumSelected ? true : false;
    }

    render() {

        return (
            <AppWrapper>
                <CodeChallengeLabel>DEMO - DouglasPonce
                </CodeChallengeLabel>

                <AppContainer>
                    <AlbumListContainer>
                        {this.state.listAlbums ? this.state.listAlbums.map(this.renderAlbumData) : []}
                    </AlbumListContainer>
                </AppContainer>
            </AppWrapper>
        );
    }
}

export default Album;
