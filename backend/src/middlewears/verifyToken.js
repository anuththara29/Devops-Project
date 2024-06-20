// const jwt = require('jsonwebtoken');

// module.exports = function (req, res, next) {
//     const token = req.body.token || req.query.token || req.headers['x-access-token'];

//     if (!token) {
//         res.status(401).send('Token not provided');
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
//         req.user = decoded;
//     } catch (error) {
//         res.status(400).send('Invalid token');
//     }

//     return next();

// }

const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        console.log('Token not provided');
        return res.status(401).send('Token not provided');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
        req.user = decoded;
        console.log('User authenticated:', req.user);
        next(); // Continue to the next middleware
    } catch (error) {
        console.log('Invalid token:', error);
        return res.status(400).send('Invalid token');
    }
}
