module.exports = {
    GET_USER_VIA_RTOKEN: 'select userID, refreshToken from users where refreshToken = ?',
    CHECK_EXISTING_ONLINE_USERNAME: 'select displayName, online from users where displayName = ? and online = 1',
    ADD_ACTIVE_USER_TO_DB: 'insert into users(userID, displayName, refreshToken, online) value (?, ?, ?, 1)',
    DELETE_RTOKEN_AND_SET_OFFLINE: 'update users set refreshToken = \'\', online = 0 where refreshToken = ?',
    POST_MESSAGE: 'insert into messages(userID, contents) value (?, ?)'
}