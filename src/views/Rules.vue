<template>
  <div>
    <h3>Правила проекта</h3>
    <b-table striped responsive="sm" hover dark :items="rules"></b-table>
  </div>
</template>
<script>
export default {
  name: "rules",
  data() {
    return {
      rules: [
        { "#": "1.1", Правило: "Мат", Наказание: "Мут 30 минут" },
        { "#": "1.2", Правило: "Оск", Наказание: "Мут 1 час" }
      ]
    };
  }
};
</script>
