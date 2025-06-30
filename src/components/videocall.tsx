"use client"
import React, { useState } from 'react'
import { HMSPrebuilt } from '@100mslive/roomkit-react'

const VideoCall = () => {
    const [roomCode, setRoomCode] = useState("")

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
            </div>

            {
                roomCode.length > 0 && (
                    <HMSPrebuilt roomCode={roomCode} />
                )
            }
        </div>
    )
}



export default VideoCall