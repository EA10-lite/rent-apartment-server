const jwt = require("jsonwebtoken");

module.exports = (req, res, next ) => {
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send({ message: "FAILED: No JWT Provided." });

    try {
        const user = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        if(!user.is_agent) res.status(403).send({ message: "FAILED: PERMISSION DENIED" });
        req.user = user;

        next();
    } catch (error) {
        res.status(401).send({ message: "FAILED: Could not read JWT provided" });
    }
}