import { Input } from "@chakra-ui/input"
import { Box, Link, SimpleGrid } from "@chakra-ui/react"
import React, {useState} from "react"
import { SearchResult } from "./interface"


function Search() {
const [searchresults, setSearchResults] = useState<SearchResult[]>([])

    const searchMusic = async(search:string)=>{
     const res = await fetch(`https://api.deezer.com/search?q=${search}`)
     const results = await res.json()
     setSearchResults(results.data)
     console.log(searchresults)
    }
    return ( 
        <>
        {searchresults && searchresults.length === 0 ? (  <div>
            <img style={{height:"400px"}} src="https://pacemindblog.files.wordpress.com/2018/05/75tvqck.gif" alt="picazzo"/>
            {/* <Lottie options={defaultOptions}height={400}
              width={400} isPaused={false} isStopped={false} ></Lottie> */}
    <Input onChange={(e)=>setTimeout(() => {
       e.target.value.length > 0 ? searchMusic(e.target.value): setSearchResults([])
    }, 1500) } variant="flushed" placeholder="Search a song.." />
    </div>): (
    
    <div style={{display:"flex",position:"absolute",top:"0"}}>

        <img style={{height:"35px", borderRadius:"50%", margin:"10px"}} src={searchresults && searchresults[0].artist.picture} alt="search dude why are u lookin at this bug"/>
    <Input onChange={(e)=>setTimeout(() => {
         e.target.value.length > 0 ? searchMusic(e.target.value): setSearchResults([])
    }, 1500) }  variant="flushed" placeholder="Search a song.." />
    </div>)}
    
    <SimpleGrid columns={5} spacing={10}>
    {searchresults && searchresults.map(result => 
    <Box key={result.id} style={{marginBottom:"150px"}} height="100px">
        
  <img style={{borderRadius:"10px"}} className="results-img" alt={result.title} height="100" src={result.album.cover_medium}/>
  
  <Link onClick={()=> window.location.assign(`/${result.album.id}`)} style={{fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{result.title}</Link></Box>
    )}
  
     </SimpleGrid>
    </>
    )
}

export default Search