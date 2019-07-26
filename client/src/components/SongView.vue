<template>
      <panel title="Songs">
    <v-btn
      slot="action"
      :to="{
        name: 'songs-create'
      }"
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>

    <div 
      v-for="song in songs"
      class="song"
      :key="song.id">

      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
        <v-btn-toggle>
          <v-btn sticky
            dark
            class="cyan"
            :to="{
              name: 'song', 
              params: {
                id: song.id
              }
            }">
            View
          </v-btn>
          <v-btn
             dark
            class="cyan"
            :to="{
              name: 'edit', 
              params: {
                id: song.id
              }
            }">
            Edit

          </v-btn>
        </v-btn-toggle>
        </v-flex>

        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import Songs from '../../services/Songs'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await Songs.index(value)).data
      }
    }
  }
}
</script>

<style>

</style>
