module.exports = {
    isLocal: false,
    MYSQL_LOCAL:
    {
        host: 'localhost',
        user: 'msg_service',
        password: 'selfmadewebapp1337',
        database: 'vlashkia'
    },
    MYSQL_REMOTE:
    {
        host: 'dbutils.ddns.net',
        user: 'msg_service',
        password: 'selfmadewebapp1337',
        database: 'vlashkia'
    },
    BCRYPT_SALTS: 14,
    SERVER_PORT: 3001
}