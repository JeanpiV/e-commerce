export const homeFetching = async () =>{

    try {
        const resp = await fetch(`http://localhost:1337/api/home`)
        
        if (!resp.ok) {

            throw new Error(`error traido por response: ${resp.statusText}`)
        }

        const datA = await resp.json()
        const dataHome = datA.data.attributes
        return dataHome

    } catch (error) {
        throw new Error(`Error al obtener los datos: ${error}`);
        
    }
}
