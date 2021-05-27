import { Container } from "@chakra-ui/layout";
import React, { useEffect,useState } from "react"
import {useParams} from "react-router-dom"
import { AlbumDetails } from "./interface/details.js"

import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
function AlbumDetail() {


    const [album, setAlbum] = useState<AlbumDetails | null>(null)
   const [playlist, setPlaylist] = useState([])
    const { id }= useParams<{id?: string}>();
    const fetchAlbum = async ()=>{
        const res = await fetch(`https://api.deezer.com/album/${id}`)
        const data =  await res.json()
        setAlbum(data)
        console.log(data.tracks)
        console.log(album)
        const tracklist=data.tracks.data.map((link:any) =>{ return {musicSrc: link.preview}})
        setPlaylist(tracklist)
        console.log(playlist)
    } 
    useEffect(()=>{
        fetchAlbum()
    },[])
    return (<div style={{marginTop:"-90vh",textAlign:"center", height:"100vh", width:"98vw"}}>
        <Container>
        {album && <>
        <h1 style={{fontSize:"25px"}}>{album.title}</h1>
    <img style={{height:"300px", marginLeft:"100px", borderRadius:"10px"}}src={album.cover_xl}/>
    <ReactJkMusicPlayer audioLists={playlist} theme="dark" volumeFade={{ fadeIn: 500, fadeOut: 500 }} showThemeSwitch={true} glassBg={true} showMiniModeCover={true} renderAudioTitle={(audioInfo,isMobile)=> <></>}/>
    </>
    }
    </Container>
    </div>)
}

export default AlbumDetail