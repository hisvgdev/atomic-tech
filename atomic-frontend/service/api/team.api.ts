'use server';

export async function fetchData(endpoint: string, type: "object" | "array" = 'array') {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    console.error("❌ API_URL is not defined! Check your .env.local file.");
    return type === "array" ? [] : {};
  }

  try {

    console.log(`Fetching: /${endpoint}`);

    const response = await fetch(`${apiUrl}/${endpoint}`, {
      next: {
        revalidate: 60
      },
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`❌ Failed to fetch ${endpoint}, Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`🚨 Error fetching ${endpoint}:`, error);
    return type.includes("array") ? [] : {};
  }
}

export async function handleGetTeams() {
  return await fetchData('team/get-all', 'array');
}
export async function handleGetTeam(id: string) {
  return await fetchData(`team/get/${id}`, 'object');
}