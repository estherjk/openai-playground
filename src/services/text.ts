export const requestText = async (text: string) => {
  const response = await fetch('/api/text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: text,
    }),
  });

  return response.json();
};
