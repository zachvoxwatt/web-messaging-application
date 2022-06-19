const SameSite_Value = 'Strict'

exports.joinCookieSettings = {
    httpOnly: true,
    secure: true,
    sameSite: SameSite_Value,
    maxAge: 24 * 60 * 60 * 1000
}

exports.leaveCookieSettings = {
    httpOnly: true,
    secure: true,
    sameSite: SameSite_Value
}