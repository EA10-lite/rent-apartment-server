const jwt = require("jsonwebtoken");

module.exports = (req, res, next ) => {
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send({
        message: "FAILED: No JWT Provided."
    });

    try {
        const user = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        req.user = user;

        next();
    } catch (error) {
        res.status(401).send({
            data: null,
            message: "FAILED: Could not read JWT provided",
            success: false
        });
    }
}