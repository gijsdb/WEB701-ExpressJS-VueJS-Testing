module.exports = {
    port: process.env.PORT || 8081,
    db: {
      database: process.env.DB_NAME || 'web701_xpress_db',
      user: process.env.DB_USER || 'web701_xpress_db',
      password: process.env.DB_PASS || 'password', 
      options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: './combinedsystemv2.sqlite'
      }
    },
    authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}