import { generateManagementToken } from "@/lib/generate-management-token";

export async function POST(request: Request) {
  const url = "https://api.100ms.live/v2/rooms";

  const managementToken = generateManagementToken();

  console.log(managementToken)
  // Parse the request body
  const body = await request.json();
  const { name } = body;

  const payload = {
    name,
  };


  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${managementToken}`,
    },
    body: JSON.stringify(payload),

  });

  if (response.status !== 200) {
    const errorData = await response.json();
    return new Response(JSON.stringify({ error: errorData || 'An error occurred' }), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const room = await response.json();
  return new Response(JSON.stringify(room), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });


}