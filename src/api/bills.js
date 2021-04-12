export const getBills = async() => {
    let response = await fetch('http://localhost:3001/fiches', {
        method: 'GET',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        }
    })

    let bills = await response.json()
    return bills
}

export const getUsers = async () => {
    let response = await fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        }
    })

    let users = await response.json()
    return users
}