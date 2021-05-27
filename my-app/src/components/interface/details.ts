export interface AlbumDetails {
    id:                      number;
    title:                   string;
    upc:                     string;
    link:                    string;
    share:                   string;
    cover:                   string;
    cover_small:             string;
    cover_medium:            string;
    cover_big:               string;
    cover_xl:                string;
    md5_image:               Md5Image;
    genre_id:                number;
    genres:                  Genres;
    label:                   string;
    nb_tracks:               number;
    duration:                number;
    fans:                    number;
    rating:                  number;
    release_date:            Date;
    record_type:             string;
    available:               boolean;
    tracklist:               string;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    contributors:            Contributor[];
    artist:                  Artist;
    type:                    string;
    tracks:                  Tracks;
}

export interface Artist {
    id:             number;
    name:           Name;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    type:           ArtistType;
}

export enum Name {
    Eminem = "Eminem",
    RapHipHop = "Rap/Hip Hop",
}

export enum ArtistType {
    Artist = "artist",
    Genre = "genre",
}

export interface Contributor {
    id:             number;
    name:           Name;
    link:           string;
    share:          string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    radio:          boolean;
    tracklist:      string;
    type:           ArtistType;
    role:           string;
}

export interface Genres {
    data: ArtistElement[];
}

export interface ArtistElement {
    id:         number;
    name:       Name;
    picture?:   string;
    type:       ArtistType;
    tracklist?: string;
}

export enum Md5Image {
    Ec3C8Ed67427064C70F67E5815B74Cef = "ec3c8ed67427064c70f67e5815b74cef",
}

export interface Tracks {
    data: TracksDatum[];
}

export interface TracksDatum {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    link:                    string;
    duration:                number;
    rank:                    number;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    md5_image:               Md5Image;
    artist:                  ArtistElement;
    type:                    PurpleType;
}

export enum PurpleType {
    Track = "track",
}
export interface Datum {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    link:                    string;
    duration:                number;
    rank:                    number;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    md5_image:               Md5Image;
    artist:                  Artist;
    type:                    string;
}