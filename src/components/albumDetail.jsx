import * as React from 'react';

import {
  DetailContainerLabel,
  DetailContainerWrapper,
  DetailContainerImg,
} from './styledComponent';

type IAlbumDetailProps = {
  albumSelected: any;
};

function AlbumDetail({
  albumSelected
}: IAlbumDetailProps) {

  return (
    <DetailContainerWrapper>
      <DetailContainerLabel>Album selected: {albumSelected.title} </DetailContainerLabel>

      {/* <DetailContainerImg>
        <img src={albumSelected.thumbnailUrl} alt={albumSelected.title} />
      </DetailContainerImg> */}

    </DetailContainerWrapper>
  );
}

export default AlbumDetail;
