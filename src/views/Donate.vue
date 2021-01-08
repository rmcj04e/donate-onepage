<template>
<div>
    <p>Донатики</p>
      <ul v-for="name in groups" :key="name.id">
          <li>{{name}}</li>
      </ul>
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