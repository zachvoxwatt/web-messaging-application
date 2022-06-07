module.exports = {
    GET_ALL_ACCOUNTS: 'select * from accounts',
    CHECK_EXISTING_EMAIL: 'select userEmail from accounts where userEmail = ?',
    CHECK_EXISTING_USERNAME: 'select userName from accounts where userName = ?',
    GET_LOGIN_CREDENTIALS: 'select userName, userPassword from accounts where userName = ?',
    REGISTER: 'insert into accounts(userID, userName, userDPName, userEmail, userPassword) value (?, ?, ?, ?, ?)',
    POST_MESSAGE: 'insert into messages(userID, contents) value (?, ?)'
}