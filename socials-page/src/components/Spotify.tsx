import axios from 'axios'
import { useEffect, useState } from 'react'

type PlaylistTrack = {
    item: {
        name: string,
        external_urls: {
            spotify: string,
        }
    }
}

const initial_track = {
    item: {
        name: '',
        external_urls: {
            spotify: '',
        }
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


    // useEffect(() => {
    //     console.log(accessToken)
    // }, [accessToken])

    return accessToken

}

const Spotify = () => {
    const [song, setSong] = useState<PlaylistTrack>(initial_track)
    const [loaded, setLoaded] = useState(false)

    const accessToken = useAccessToken()

    useEffect(() => {

        if (!accessToken) {
            return
        }

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
                        external_urls: {
                            spotify: response.data.item.external_urls.spotify
                        }
                    }
                }

                if (!track.item.name) {
                    console.log("no song found")
                    setLoaded(false)
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

    useEffect(() => {
        console.log(song)
    }, [song])

    useEffect(() => {
        console.log(loaded)
    }, [loaded])
    
    const content = loaded
    ?
        (
            <>
            <div>
                <p>Currently Listening to:</p>
                <iframe
                src={`https://open.spotify.com/track/${song.item.external_urls.spotify}`}
                >
                </iframe>    
                

            </div>
            </>
        ) 

    :    <p>loading</p> 
    
    return content
}

export default Spotify