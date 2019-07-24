import Api from './Api'

export default {
    index(){
        return Api().get('songs')
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