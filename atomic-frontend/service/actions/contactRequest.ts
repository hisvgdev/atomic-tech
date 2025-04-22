'use server';

export async function sendContactRequest(data: {
  email: string;
  number: string;
  telegram: string;
}) {
  const apiUrl = process.env.API_URL;

  await fetch(`${apiUrl}/admin/api/v1/client/applications/create`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
