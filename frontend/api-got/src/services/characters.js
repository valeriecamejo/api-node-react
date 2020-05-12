
const url = 'http://localhost:8080'

export const getData = async () => {
  const response = await fetch(url)
  const responseJson = await response.json()
  return responseJson
}

export const getCharacterById = async ({ id }) => {
  const response = await fetch(`${url}/character${id}`)
  const responseJson = await response.json()
  return responseJson
}