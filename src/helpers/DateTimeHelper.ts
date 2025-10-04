import moment from "moment"

// Helper function to extract date and time of a particular order from firebase firestore database
const DateTimeHelper = (firestoreDate) => {

    const date = new Date(firestoreDate * 1000)

    return moment(date).format("MMMM Do, hh:mm A")
}

export default DateTimeHelper