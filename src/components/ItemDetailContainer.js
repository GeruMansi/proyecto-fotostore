import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";
import Categories from "./Categories";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const { itemId } = useParams()

    const [item, setItem] = useState({})

    useEffect(() => {
        
        const db = getFirestore()
        const itemCollection = db.collection('items')
        const singleItem = itemCollection.doc(itemId)

        singleItem.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log('No existe el documento')
                    return
                }
                setItem({id: doc.id, ...doc.data()})
            })
            .catch((err) => {
                console.log(err)
            })

    }, [itemId])

    return (
        <>
            <Categories />
            <div className="itemDetailContainer">
                <ItemDetail item={item}/>
            </div>
        </>
    )
}