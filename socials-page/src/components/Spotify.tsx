import axios from 'axios'
import { useEffect, useState } from 'react'

type PlaylistTrack = {
    item: {
        name: string,
        id: string,
    }
}

const initial_track = {
    item: {
        name: '',
        id: '',
    }
}

const useAccessToken = () => {

    const [accessToken, setAccessToken] = useState<string>("")

    useEffect(() => {
        axios.post('http://localhost:5000/refresh_token')
        .then(response => {
            setAccessToken(response.data.access_token)
        })
        .catch(() => {
            throw new Error()
        })
    }, [])

    return accessToken

}

const Spotify = () => {
    const [song, setSong] = useState<PlaylistTrack>(initial_track)
    const [loaded, setLoaded] = useState(false)

    const accessToken = useAccessToken()

    useEffect(() => {
        
        const getPlaylist = async() => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                
                })

                const track: PlaylistTrack = {
                    item: {
                        name: response.data.item.name,
                        id: response.data.item.id
                    }
                }

                if (!track.item.name) {
                    return
                }
                else {
                    setSong(track)
                    setLoaded(true)
                }
            }
            catch (error) {
                throw new Error()
            }
        }
        getPlaylist()
        
    }, [accessToken])
    
    const content = loaded
    ?
        (
            <>
            <div className="div__song">
                <p>Currently Listening to:</p>
                <iframe className="iframe__spotify"
                src={`https://open.spotify.com/embed/track/${song.item.id}`}
                >
                </iframe>    
            
            </div>
            </>
        ) 

    :    <p>No song currently playing</p> 
    
    return content
}

export default Spotify