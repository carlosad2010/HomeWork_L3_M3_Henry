export async function fetchJson(url) {
    
  // TODO: Implementar
  // 1. await fetch(url)
try {
    const response = await fetch(url);
    
    // 2. Validar response.ok
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // 3. Si !ok, throw Error con status
    // 4. await response.json()
    const data = await response.json();

    // 5. return data
    return data;
  } catch (error) {
    console.error('Error fetching JSON:', error);
    throw error;
  }
}
