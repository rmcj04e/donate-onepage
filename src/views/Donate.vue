<template>
<div>
    <p>Донатики</p>
      <ul v-for="name in group_names" :key="name.id">
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
            group_names:[],
        }
    },
    mounted(){
      axios
        .get("http://vma.vovanmines.ru/scripts/handlers/REST.php")
        .then((response) => {
            this.group_names = response.data.group_names
        });
    }
}
</script>