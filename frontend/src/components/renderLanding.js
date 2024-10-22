
import { getFetchingAll } from "./api/GET.js";
import { cardCategory } from "./landing/cardCategory.js";
import { homeFetching } from "./landing/homeFetching.js"

const renderLanding = async () =>{
    /* const [Title, ] = await homeFetching() 
    const resp = await getFetchingAll('Home')
    const title = resp.data.attributes.Title
    const description = resp.data.attributes.description
    
    console.log(description)
    // Insertando titulo de la tienda
    let contentTitle = document.getElementById('title')
    contentTitle.innerText = title ;

    // Insertando description de la Tienda
    let contentDescription = document.getElementById('description')

    // 

    */

    //agregamos las tarjetas de categorias

    await cardCategory()
    
}

renderLanding()