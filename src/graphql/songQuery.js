<<<<<<< HEAD
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
=======
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
>>>>>>> 079aac4d9e1694a933dcda10df51f12a51094da0
`;