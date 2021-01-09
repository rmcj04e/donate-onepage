<template>
<div>
<h1>Привелегия {{group}}</h1>
<p>{{desc}}</p>
<p>Цена привелегии:{{price}}</p>
</div>
</template>

<script>
import axios from 'axios'
export default{
    name:'donatef',
    data(){
       return{
           group: this.$route.params.id,
           price: null,
           desc: null
       }
    },
    mounted(){
    axios
         .get("http://vma.vovanmines.ru/scripts/handlers/REST.php?action=get_group_data&group="+this.group)
         .then((response) => {
             console.log(response)
             this.desc = response.data.desc
             this.price = response.data.price
         });
    }
}
</script>