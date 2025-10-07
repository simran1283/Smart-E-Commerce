import { collection, doc, getDocs } from "firebase/firestore"
import { auth, db } from "../../../config/firebase"
import { store } from "../../../store/store"


const fetchUserOrders = async () =>{

    try {
        // userid from redux
        // const userIdfromRedux = store.getState().userSlice.userData
        // console.log("userid from redux", userIdfromRedux)
        // //user Id from firebase
        const userIdfromFirebase = auth.currentUser?.uid

        const userOrderref = collection(doc(db,"users",userIdfromFirebase),"orders")

        const userOrders = await getDocs(userOrderref)

        const orderList = userOrders.docs.map((doc) => ({
            id : doc.id,
            ...doc.data()
        }))

        return orderList
        
    } catch (error) {
        
        console.log("Error fetching Orders",error)

    }
}

export default fetchUserOrders