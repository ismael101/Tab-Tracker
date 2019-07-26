const { Op } = require('sequelize');
const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
          let songs = null
          const search = req.query.search
          if (search) {
            songs = await Song.findAll({
              where: {
                [Op.or]: [
                  'title', 'artist', 'genre', 'album'
                ].map(key => ({
                  [key]: {
                    [Op.like]: `%${search}%`
                  }
                }))
              }
            })
          } else {
            songs = await Song.findAll({
              limit: 10
            })
          }
          res.send(songs)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to fetch the songs'
          })
        }
      },
      async show (req, res) {
        try {
          const song = await Song.findById(req.params.songId)
          res.send(song)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the songs'
          })
        }
      },
    async post (req, res) {
        try {
          const song = await Song.create(req.body)
          res.send(song)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to create the song',
            err:err
        })
        }
      },
    async show(req, res){
        try{    
            const song = await Song.findAll({
                where:{id:req.params.id}
            })
            res.send(song)

        }catch(err){
            res.status(500).json({
                error:'an error has occured trying to fetch the song id',
                err:err
            })

        }
    },
    async put(req, res){
        try{
            await Song.update(req.body,{where: {id:req.params.id}})
            const song = await Song.findAll({
                where:{id:req.params.id}
            })
            res.send(song)

        }catch(err){
            res.status(500).json({
                error:'an error has occured trying to update the song'
            })
        }
    }
}