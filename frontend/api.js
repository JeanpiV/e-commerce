const consulta = async ()=>{
    try {
        
        const response = await fetch(`http://localhost:1337/api/products`)

        if (!response.ok) {
            console.log(`problema en la api`)

        }

        const data = await response.json()

        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

consulta()