module.exports = app => {
    app.use('/api', require('./base.routes'))
    app.use('/api/properties', require('./properties.routes'))
}
