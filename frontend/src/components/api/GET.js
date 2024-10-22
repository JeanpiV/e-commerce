export const getFetchingAll = async (query) =>{
    try {
        const resp = await fetch(`http://localhost:1337/api/${query}`)
        
        if (!resp.ok) {

            throw new Error(`error traido por response: ${resp.statusText}`)
        }

        let data = await resp.json()
        return data 

    } catch (error) {
        throw new Error(`Error al obtener los datos: ${error}`);
        
    }
}