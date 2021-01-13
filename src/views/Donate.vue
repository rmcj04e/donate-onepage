<template>
<div>
      <p text-center>Донатики</p>
      <b-row>
<div v-for="group in groups" :key="group.id">
    <b-col>
<b-card bg-variant="dark" text-variant="white"
    :title="group.name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{group.desc}}
    </b-card-text>

    <router-link :to="{ name: 'donate', params:{ id:group.name } }"><b-button variant="primary">Подробнее</b-button></router-link>
  </b-card>
    </b-col>
          </div>
      </b-row>
    
      </div>
</template>

<script>
import axios from 'axios'
export default{
    name:"Donate",
    data(){
        return{
            groups:[],
            server: this.$route.params.server
        }
    },
    mounted(){
      axios
        .get("/api/rest.php?action=get_donates_by_server&server="+this.server)
        .then((response) => {
            this.groups = response.data
            console.log(response)
        });
    }
}
</script>