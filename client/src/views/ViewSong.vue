<template>
<v-container fluid>
    <v-layout row wrap justify-center>
        <v-flex xs6 order-lg2 class='pl-4 pr-4 pt-2 pb-2'>
            <panel title='Song Metadata'>
                <v-layout row wrap>
                    <v-flex xs6>
                        <h1>Title: {{song.title}}</h1>
                        <h2>Artist: {{song.artist}}</h2>
                        <h2>Album: {{song.album}}</h2>
                        <h2>Genre: {{song.genre}}</h2>
                    </v-flex>
                    <v-flex xs6>
                        <v-img :src='song.albumImageUrl'></v-img>
                    </v-flex>
                    </v-layout>
            </panel>
        </v-flex> 
        <v-flex xs6 order-lg2 class='pl-4 pr-4 pt-2 pb-2'>
            <panel title='Lyrics'>
                {{song.lyrics}}
            </panel>
        </v-flex>    
        <v-flex xs6 order-lg2 class='pl-4 pr-4 pt-2 pb-2'>
            <panel title='Tab'>
                {{song.tab}}
            </panel>

        </v-flex>
        <v-flex xs6 order-lg2 class='pl-4 pr-4 pt-2 pb-2'>
            <panel title='Youtube Video'>
                <youtube
                :video-id="song.youtubeId"
                :player-width="800"
                :player-height="330">
                </youtube>
            </panel>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import Songs from '../../services/Songs'
import Panel from '../components/Panel'

export default {
    components:{
        Panel
    },
    data(){
        return{
            song:{}
        }
    },
    async mounted(){
        const songId = this.$route.params.id
        console.log(songId)
        let song = (await Songs.show(songId)).data
        song.forEach(element => {
            this.song = element
        });

    }

}
</script>

<style>

</style>
