<template>
<div>
    <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <SongBookmark />
      <SongHistory class="mt-2" />
    </v-flex>

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">
      <SongSearch />
      <SongView class="mt-2" />
    </v-flex>
    </v-layout>
</div>
</template>

<script>

import Songs from '../../services/Songs'
import SongSearch from '../components/SongSearch'
import SongHistory from '../components/SongHistory'
import SongBookmark from '../components/SongBookmark'
import SongView from '../components/SongView'
import {mapState} from 'vuex'
export default {
  components: {
    SongView,
    SongSearch,
    SongBookmark,
    SongHistory
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await Songs.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>