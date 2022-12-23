import { gql } from '@apollo/client';

export const Get_SONGS = gql`
  query Get_SONGS {
    allSongs {
        id
        name
        author_name
        img
        musicName
        date_of_release
        date_of_birth
        other_songs
    }
  }
`;