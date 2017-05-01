module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POS, OPTION, PUT, PATH, DELETE')
    res.header('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-Type, Accept')
}