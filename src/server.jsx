const API_URL = 'http://127.0.0.1:8000/api/product/'

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Failed to fetch products')
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
