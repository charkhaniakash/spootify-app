<<<<<<< HEAD
import { gql } from '@apollo/client';

export const CREATE_NewSong = gql`mutation(
    $name:String!,
    $author_name:String,
    $img:String!,
    $lang:String,
    $timesPlayed: Int, 
    $musicName: String!,
    $date_of_release:String!,
    $date_of_birth:String!,
    $other_songs:String!,
    $artist_name:String
){
  createSong(
    name:$name,
    author_name:$author_name ,
    img:$img
    lang: $lang
    timesPlayed:$timesPlayed 
    musicName: $musicName
    date_of_release: $date_of_release
    date_of_birth: $date_of_birth
    other_songs:  $other_songs
    artist_name: $artist_name
  ){
        id
        name
        author_name
        img
        lang
        timesPlayed
        musicName
        date_of_release
        date_of_birth
        other_songs
  }
}
=======
import { gql } from '@apollo/client';

export const CREATE_NewSong = gql`mutation(
    $name:String!,
    $author_name:String,
    $img:String!,
    $lang:String,
    $timesPlayed: Int, 
    $musicName: String!,
    $date_of_release:String!,
    $date_of_birth:String!,
    $other_songs:String!,
    $artist_name:String
){
  createSong(
    name:$name,
    author_name:$author_name ,
    img:$img
    lang: $lang
    timesPlayed:$timesPlayed 
    musicName: $musicName
    date_of_release: $date_of_release
    date_of_birth: $date_of_birth
    other_songs:  $other_songs
    artist_name: $artist_name
  ){
        id
        name
        author_name
        img
        lang
        timesPlayed
        musicName
        date_of_release
        date_of_birth
        other_songs
  }
}
>>>>>>> 079aac4d9e1694a933dcda10df51f12a51094da0
`;