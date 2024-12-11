const PROJETO_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsuarios = async () => {
  try {
    const response = await fetch(PROJETO_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados!');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
