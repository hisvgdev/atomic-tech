'use server'

async function fetchData(endpoint: string, type: "object" | "array" = 'array') {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    console.error("❌ API_URL is not defined! Check your .env.local file.");
    return type === "array" ? [] : {};
  }

  try {

    console.log(`Fetching: /${endpoint}`);

    const response = await fetch(`${apiUrl}/${endpoint}`, {
      next: {
        revalidate: 60 // ISR - обновление каждые 60 секунд
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

// GET REQUEST

export async function handleGetCategoryArticlesList() {
  return await fetchData('article-category/get-all', "array");
}

export async function handleGetCategoryArticle(id: string) {
  return await fetchData(`article-category/get/${id}`, "object");
}

export async function handleGetCategorySubArticlesLists() {
  return await fetchData('article-sub-category/get-all', "array");
}

export async function handleGetCategorySubArticleList(id: string) {
  return await fetchData(`article-sub-category/get/${id}`, "object")
}
