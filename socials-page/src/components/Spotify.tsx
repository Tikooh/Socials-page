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

const Spotify = () => {
    const [song, setSong] = useState<PlaylistTrack>(initial_track)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const getPlaylist = async() => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/playlists/SX8MX6pk4YtxtF27py1bG`, {
                    headers: {
                        Authorization: `Bearer `
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
        <p>Loading Playlist</p>

    :   (
        <>
        <div>
            <p>Currently Listening to:</p>
            <iframe
            src={`https://open.spotify.com/embed/playlist/1McZxRocZ3JYt1TWgEI9eM?utm_source=generator&theme=0`}>
                
                
            </iframe>
        </div>
        </>
    )
    return content
}

export default Spotify