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
      method: "GET",
      next: {
        revalidate: 1800
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
    return type === "array" ? [] : {};
  }
}

// Article
export async function getAllArticles() {
  return fetchData("article/get-all", "array");
}
export async function getArticle(id: string) {
  return fetchData(`article/get/${id}`, "object");
}

// Article Categories
export async function getAllArticleCategories() {
  return fetchData("article-category/get-all", "array");
}
export async function getArticleCategory(id: string) {
  return fetchData(`article-category/get/${id}`, "object");
}

// Article Sub-Categories
export async function getAllArticleSubCategories() {
  return fetchData("article-sub-category/get-all", "array");
}
export async function getArticleSubCategory(id: string) {
  return fetchData(`article-sub-category/get/${id}`, "object");
}

// Work Cases
export async function getAllWorkCases() {
  return fetchData("work-case/get-all", "array");
}
export async function getWorkCase(id: string) {
  return fetchData(`work-case/get/${id}`, "object");
}

// Work Case Categories
export async function getAllWorkCaseCategories() {
  return fetchData("work-case-category/get-all", "array");
}
export async function getWorkCaseCategory(id: string) {
  return fetchData(`work-case-category/get/${id}`, "object");
}

// Work Case Sub-Categories
export async function getAllWorkCaseSubCategories() {
  return fetchData("work-case-sub-category/get-all", "array");
}
export async function getWorkCaseSubCategory(id: string) {
  return fetchData(`work-case-sub-category/get/${id}`, "object");
}

// Header Pages
export async function getAllHeaderPages() {
  return fetchData("header/get-all", "array");
}
export async function getHeaderPage(id: string) {
  return fetchData(`header/get/${id}`, "object");
}

// Team
export async function getAllTeamMembers() {
  return fetchData("team/get-all", "array");
}
export async function getTeamMember(id: string) {
  return fetchData(`team/get/${id}`, "object");
}

// Technologies
export async function getAllTechnologies() {
  return fetchData("technology/get-all", "array");
}
export async function getTechnology(id: string) {
  return fetchData(`technology/get/${id}`, "object");
}

// Promos
export async function getAllPromo() {
  return fetchData("promo/get", "array");
}

