import axios from 'axios'
import { useEffect, useState } from 'react'

type PlaylistTrack = {
    name: string,
    artists: { name: string }[]
}

type Spotify_playlist = {
    name: string,
    tracks: PlaylistTrack[]
}

const initial_playlist = {
    name: '',
    tracks: []
}

const Spotify = () => {
    const [playlist, setPlaylist] = useState<Spotify_playlist>(initial_playlist)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const getPlaylist = async() => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/playlists/SX8MX6pk4YtxtF27py1bG`, {
                    headers: {
                        Authorization: `Bearer `
                    }
                })
                setPlaylist(response.data)
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
            <ul>
                {playlist.tracks.map(item => {
                    console.log(item.name)
                    return (
                        <li>
                            {item.name}
                        </li>
                    )

                })}
            </ul>
        </div>
        </>
    )
    return content
}

export default Spotify