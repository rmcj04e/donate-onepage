<template>
<div>
      <p text-center>Донатики</p>
      <b-row>
<div v-for="group in groups" :key="group.id">
    <b-col>
<b-card bg-variant="dark" text-variant="white"
    :title="group"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Здесь когда-то было описание привелегии,но его спиздили цыгане
    </b-card-text>

    <router-link :to="{ name: 'donate', params:{ id:group } }"><b-button variant="primary">Подробнее</b-button></router-link>
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
        }
    },
    mounted(){
      axios
        .get("http://vma.vovanmines.ru/scripts/handlers/REST.php")
        .then((response) => {
            this.groups = response.data.groups
        });
    }
}
</script>