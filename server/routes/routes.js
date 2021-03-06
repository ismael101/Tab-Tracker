const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const isAuthenticated = require('../policies/isAuthenticated')
const SongsController = require('../controllers/SongsController')
const BookmarksController = require('../controllers/BookmarksController')
const HistoriesController = require('../controllers/HistoriesController')

module.exports = (app) => {
    app.post('/register',AuthenticationControllerPolicy.register,AuthenticationController.register)
    app.post('/login',AuthenticationController.login)
    app.get('/songs', SongsController.index)
    app.post('/songs',SongsController.post)
    app.get('/songs/:id',SongsController.show)
    app.post('/songs/:id', SongsController.put)
    app.get('/bookmarks',BookmarksController.index)
    app.get('/bookmarks',isAuthenticated,BookmarksController.index)
    app.post('/bookmarks',isAuthenticated,BookmarksController.post)
    app.delete('/bookmarks/:bookmarkId',isAuthenticated,BookmarksController.remove)
    app.get('/histories',isAuthenticated,HistoriesController.index)
    app.post('/histories',isAuthenticated,HistoriesController.post)
}


 