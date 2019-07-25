


export function fetchStudent() {
    return (dispatch, getState) => {
        fetch("https://api.myjson.com/bins/1dlper").then((data) => {
            console.log("data....", data)
        })
    }
}