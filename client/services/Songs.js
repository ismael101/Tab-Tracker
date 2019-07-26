import Api from './Api'

export default {
    index (search) {
        return Api().get('songs', {
          params: {
            search: search
          }
        })
      },
    post(song){
        return Api().post('songs',song)
    },
    show(songId){
        return Api().get(`songs/${songId}`)
    },
    put(songId, song){
        return Api().post(`songs/${songId}`, song)
    }
}