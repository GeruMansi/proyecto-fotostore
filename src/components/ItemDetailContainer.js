import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const [item, setItem] = useState({})

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    {
                        id: '001',
                        title: 'Filtro UV Marumi 52mm',
                        price: '$500',
                        picUrl: 'https://http2.mlstatic.com/D_NQ_NP_789478-MLA31122813738_062019-O.jpg',
                        description: 'Filtro UV de vidrio templado para protección del lente. Marca: Marumi. Tamaño: 52mm'
                    }
                )
            }, 2000)
        })

        getItem.then((res) => {
            setItem(res)
        })
    })

    return (
        <>
        <ItemDetail item={item}/>
        </>
    )
}