import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/firebase";

function ItemListContainer() {

    const { catId } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {

        const db = getFirestore()
        const itemCollection = (catId? db.collection('items').where('category', '==', catId) : db.collection('items'))

        itemCollection.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('No hay coincidencias')
                    return
                }
                console.log('Documentos encontrados')

                setProducts(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
        

    }, [catId])

    return (
        <>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer