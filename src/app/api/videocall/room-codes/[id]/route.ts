import { generateManagementToken } from "@/lib/generate-management-token";
import { NextRequest } from "next/server";


export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {

    const { id } = await params;

    const url = `https://api.100ms.live/v2/room-codes/room/${id}`

    const managementToken = generateManagementToken();

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${managementToken}`,
        },
    });
    if (response.status !== 200) {
        const errorResponse = await response.json();
        console.error("Error fetching room code:", errorResponse);
        return new Response(JSON.stringify({ error: 'Failed to fetch room code' }), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const roomCode = await response.json();
    return new Response(JSON.stringify(roomCode), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}