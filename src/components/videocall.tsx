"use client"
import React, { useState } from 'react'
import { HMSPrebuilt } from '@100mslive/roomkit-react'
import { generateAuthToken, Role } from '@/lib/generate-auth-token'

const VideoCall = () => {

    const [role, setRole] = useState(Role.GUEST)

    const [authToken, setAuthToken] = useState("")

    const handleJoinRoom = async () => {
        const authToken = generateAuthToken("68630c02954dff85df0fc365", "Steven", role)
        setAuthToken(authToken)
    }
    return (
        <div style={{ height: '100vh' }}>
            <div
                className='flex flex-col items-center h-full space-y-4 mt-2'
            >

                
                <select name="" id=""
                className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={(e) => {
                        setRole(e.target.value as Role)
                    }}
                >
                    <option value="host">Host</option>
                    <option value="guest">Guest</option>
                </select>

                <button onClick={handleJoinRoom}>
                    Join Room
                </button>
            </div>

            {
                authToken.length > 0 && (
                    <HMSPrebuilt authToken={authToken} />
                )
            }
        </div>
    )
}



export default VideoCall