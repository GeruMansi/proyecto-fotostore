import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer({greeting}) {

    const [items, setItems] = useState([])

    useEffect(() => {
    
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        id: '001',
                        title: 'Filtro UV Marumi 52mm',
                        price: '$500',
                        picUrl: 'https://http2.mlstatic.com/D_NQ_NP_789478-MLA31122813738_062019-O.jpg'
                    },
                    {
                        id: '057',
                        title: 'Parasol pétalo 72mm',
                        price: '$990',
                        picUrl: 'https://http2.mlstatic.com/D_NQ_NP_717801-MLA20402340730_092015-O.jpg'
                    },
                    {
                        id: '314',
                        title: 'Control remoto IR',
                        price: '$720',
                        picUrl: 'https://http2.mlstatic.com/D_NQ_NP_744267-MLA31351310243_072019-O.jpg'
                    }
                ])
            }, 2000)
        })
    
        getItems.then((res) => {
            setItems(res)
        })
    })

    return (
        <>
        <h1>{greeting}</h1>
        <ItemCount stock={7} initial={1}/>
        <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer