import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'

function Users() {
    const { username } = useParams()

    useEffect(()=> {
        console.log(`fetching data from ${username}`)
    }, [username])
    console.log(username)
    return <h1>{username}</h1>
}

export default Users