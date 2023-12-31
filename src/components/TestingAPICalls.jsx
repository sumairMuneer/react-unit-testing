import React, { useEffect, useState } from 'react'
import { FetchData } from '../utils/Services'

const TestingAPICalls = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        FetchData().then(data => {
            setData(data);
        })
    }, [])

    return (
        <div>
            {(data || []).map(item => (
                <div>
                    {item.title}
                </div>
            ))}
        </div>
    )
}

export default TestingAPICalls