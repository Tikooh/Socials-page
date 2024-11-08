import axios from 'axios'
import { useEffect, useState } from 'react'

type PlaylistTrack = {
    name: string,
    artist: string
}

type Spotify_playlist = {
    name: string,
    tracks: PlaylistTrack[]
}

const initial_track = {
    name: '',
    artist: '',
}

const Refresh_Token = () => {

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

    useEffect(() => {
        const getPlaylist = async() => {
            try {
                const accessToken = Refresh_Token()
                const response = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                setSong(response.data)
                setLoaded(true)
            }

            catch (error) {
                throw new Error()
            }
        }
        getPlaylist()
        
    }, [])

    const content = loaded
    ?
        <p>Loading Song</p>

    :   (
        <>
        <div>
            <p>Currently Listening to:</p>
            <iframe
            src={`https://open.spotify.com/track/${song.name}`}>
                
                
            </iframe>
        </div>
        </>
    )
    return content
}

export default Spotify