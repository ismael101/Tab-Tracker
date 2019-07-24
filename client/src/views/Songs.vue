<template>
    <v-layout>
        <v-flex>
            <panel title='Songs'>
                <v-btn
                    slot='action'
                    @click="navigateTo({name:'songs-create'})"
                    class='cyan accent-2'
                    light
                    medium
                    absolute
                    right
                    middle
                    fab                
                    >
                    <v-icon> playlist_add </v-icon>
                </v-btn>
                    <div v-for="song in songs" :key='song.id'>
                    <v-layout row>
                    <v-flex xs6>
                        <h1>Title: {{song.title}}</h1>
                        <h2>Artist: {{song.artist}}</h2>
                        <h2>Album: {{song.album}}</h2>
                        <h2>Genre: {{song.genre}}</h2>
                        <v-btn-toggle>
                        <v-btn light class='cyan accent-2' @click="navigateTo({name:'edit', params:{id:song.id}})">Edit</v-btn>
                        <v-btn light class='cyan accent-2' @click="navigateTo({name:'song',params:{id:song.id}})">View</v-btn>
                        </v-btn-toggle>
                    </v-flex>
                    <v-flex xs6>
                        <img :src='song.albumImageUrl'>
                    </v-flex>
                    </v-layout>
                    </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '../components/Panel.vue'
import Songs from '../../services/Songs'

export default {
components:{
    Panel
},
data(){
    return{
        songs: []
    }
},
async mounted(){
    this.songs = (await Songs.index()).data



},
methods:{
    navigateTo(link){
        this.$router.push(link)
    }
}


}
</script>

<style>

</style>
