"use client"
import React, { useState } from 'react'
import { HMSPrebuilt } from '@100mslive/roomkit-react'
import { generateAuthToken, Role } from '@/lib/generate-auth-token'

const VideoCall = () => {
    const [roomCode, setRoomCode] = useState("")

    const [role, setRole] = useState(Role.GUEST)

    const authToken = generateAuthToken("68630c02954dff85df0fc365", "Steven", role)

    return (
        <div style={{ height: '100vh' }}>
            <div
                className='flex flex-col items-center h-full space-y-4 mt-2'
            >

                <input
                    className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    type="text"
                    placeholder='Enter the room code'
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                />
                <select name="" id=""
                className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={(e) => {
                        setRole(e.target.value as Role)
                    }}
                >
                    <option value="host">Host</option>
                    <option value="guest">Guest</option>
                </select>
            </div>

            {
                roomCode.length > 0 && (
                    <HMSPrebuilt authToken={authToken} />
                )
            }
        </div>
    )
}



export default VideoCall