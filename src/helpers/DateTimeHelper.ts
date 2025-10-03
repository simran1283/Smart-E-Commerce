import moment from "moment"

const DateTimeHelper = (firestoreDate) => {

    const date = new Date(firestoreDate * 1000)

    return moment(date).format("MMMM Do, hh:mm A")
}

export default DateTimeHelper