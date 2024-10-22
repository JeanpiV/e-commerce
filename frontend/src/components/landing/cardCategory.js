import { getFetchingAll } from "../api/GET.js"

export const cardCategory = async() =>{
    const data = await getFetchingAll('Category')

    console.log(data)

}