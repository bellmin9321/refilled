export const getItems = async () => {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };

  try {
    const data = await fetch(`/api/items`, config).then((res) => res.json());

    return data;
  } catch (error) {}
};
