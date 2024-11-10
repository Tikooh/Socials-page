import axios from "axios"
import { useState } from "react"

const UniqueSlimes = () => {

    const [num, setNum] = useState(0)

    const fetchUniqueSlimes = async (): Promise<number> => {
        const response = await axios.get('http://localhost:5000/lenSlimes')

        return response.data.count
    }

    const useFetch = async (): Promise<void> => {
        const slime_data = await fetchUniqueSlimes()
        setNum(slime_data)
    }

    useFetch()

    const content = (
        <div className="div__visitor_info">
            <p>Number of unique visitors: {num}</p>
        </div>
    )

    return content
}

export default UniqueSlimes