<template>
        <div class='white elevation-2'>
                <v-toolbar flat dense class='cyan' dark><v-toolbar-title>{{title}}</v-toolbar-title></v-toolbar>
                <v-spacer/>
                <div>
            <v-card class='pl-4 pr-4 pt-2 pb-2'>
                <slot name=action>
                </slot>
                <slot>

                </slot>
            </v-card>
            </div>
            </div>
</template>

<script>
export default {
    name:'Panel',
    data(){
        return{
        
        }
    },
    props:['title'],

}
</script>

<style>

</style>
