<template>
    <div>
        <div v-if="error">
          <v-alert :value="true" type='error'>{{error}}</v-alert>
        </div>
        <Panel title='Edit Song'>
            <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="YouTube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field>

        <v-textarea
          label="Tab"
          multi-line
          required
          :rules="[required]"
          v-model="song.tab"
        ></v-textarea>

        <v-textarea
          label="Lyrics"
          multi-line
          required
          :rules="[required]"
          v-model="song.lyrics"
        ></v-textarea>

             <v-btn v-on:click='save' color='primary'>
                 Save
             </v-btn>
        </Panel>
    </div>
</template>

<script>
import Panel from '../components/Panel'
import Songs from '../../services/Songs'


export default {
    data () {
    return {
      song: {
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components:{
      Panel
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$route.params.id
      try {
        await Songs.put(songId,this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
   const songId = this.$route.params.id
        let song = (await Songs.show(songId)).data
        song.forEach(element => {
            this.song = element
        });
  }

}
</script>

<style>

</style>
