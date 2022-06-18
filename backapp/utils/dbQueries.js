module.exports = {
    GET_USER_VIA_RTOKEN: 'select userID, refreshToken from users where refreshToken = ?',
    CHECK_EXISTING_ONLINE_USERNAME: 'select userID, displayName, isOnline from users where displayName = ? collate utf8mb4_unicode_ci',
    ADD_ACTIVE_USER_TO_DB: 'insert into users(userID, displayName, refreshToken, isOnline) value (?, ?, ?, 1)',
    CHANGE_EXISTING_USER_TOKEN: 'update users set isOnline = 1, refreshToken = ? where userID = ? and displayName = ?',
    DELETE_RTOKEN_AND_SET_OFFLINE: 'update users set refreshToken = \'\', isOnline = 0 where refreshToken = ?',
    POST_MESSAGE: 'insert into messages(userID, contents) value (?, ?)',
    RESET_DATA: 'UPDATE users SET refreshToken = \'\', isOnline = 0'
}