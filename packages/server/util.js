function cookieHeaderParser(cookies) {
    let cookieArray = cookies.split(';').map((arrayOfCookies) => {
        return arrayOfCookies.replace('=', ':').replace('auth.', '').replace('.google', '').replace(/\s/g, "")
    })

    let cookieObject = cookieArray.map((arrayData) => {
        return { [arrayData.split(':')[0]]: arrayData.split(':')[1] }
    })

    return Object.assign({}, ...cookieObject)
}

export default cookieHeaderParser