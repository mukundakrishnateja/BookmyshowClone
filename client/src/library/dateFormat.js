export const dateFormat = (dateString) => {
    const date = new Date(dateString)
    const options = { weekday : 'short',month: 'short', day: 'numeric', year: 'numeric' }
    return date.toLocaleDateString(undefined, options)
}
