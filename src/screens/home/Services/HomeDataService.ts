import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../config/firebase"

const getProducts = async () => {

    try {

        const products = await getDocs(collection(db, "products"))

        let list = []

        products.forEach((doc) =>
            list.push(doc.data()))

        return list ; 
    }
    catch (err) {

        console.log("Error Fetching Data ", err)
    }
}

export default getProducts