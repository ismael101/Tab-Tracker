const {Song} = require('../models')

module.exports = {
    async index(req,res){
        try{
            const songs = await Song.findAll({
                limit:10
            })
            res.send(songs)
        }
        catch(err){
            res.status(500).send({
                error:'an error has occured trying to fetch all the songs',
                err:err
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