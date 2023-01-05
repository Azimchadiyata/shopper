import {useApiData} from "../hooks/useApiData"


export function CustomHookDemo()
{
    const [categories]= useApiData("http://fakestoreapi.com/products/categories")
    return(
        <div>
            <h3>Categories</h3>
            <ol>
                   {
                    categories.map(category=>
                        <li>
                            {category}
                        </li>
                        )
                   } 
            </ol>
        </div>
    )
}
