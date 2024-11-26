function checkEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email)
}

function checkCb(cardNumber) {
    return !isNaN(cardNumber)
}

export {checkEmail}