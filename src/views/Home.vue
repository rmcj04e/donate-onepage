<template>
<div>
  <h3>Добро пожаловать на страницу проекта {{projectname}}</h3>
  <p>IP сервера:{{ip}}</p>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data(){
    return {
      projectname:"rmcj-mc",
      ip:"rs1.rmcj.ru:43005"
    }
  }
};
</script>
