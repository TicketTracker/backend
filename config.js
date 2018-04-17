module.exports.db = function () {
    if (process.env.NODE_ENV !== 'production') {
        return {
            mainDb: "mongodb://localhost:27017/tickettracker"

        }
    } else {
        return {
            mainDb: "mongodb://admin:admin@ds133331.mlab.com:33331/bookstorelectureapi"
        }
    }
}()