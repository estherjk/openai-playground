export const requestText = async (keywords: string) => {
  const response = await fetch('/api/text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      keywords: keywords,
    }),
  });

  return response.json();
};
