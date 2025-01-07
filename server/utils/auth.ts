// token
const jwt = require('jsonwebtoken');
//establish the expiration date and secret
const secret = 'Arjunsecret!!!';
const expiration = '5y';

// authenticated routes function
module.exports = {
    authMiddleware: function ({ req }) {
        // token in the header
        let token = req.body.token || req.query.token || req.headers.authorization;
        // if no token, return request object as is
        if (!token) {
            return req;
        }
        // split token from Bearer
        token = token.split(' ').pop().trim();
        // verify token
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }
        // return request object as is
        return req;
    },
    // sign token function
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }

};
