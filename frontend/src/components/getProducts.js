export const getProductAll = async ()=>{
    try {
        
        const resp = await fetch(`http://localhost:1337/api/products`)
        

    } catch (error) {
        console.error(error)
    }
}

