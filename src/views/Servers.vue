<template>
  <div>
    <b-row>
      <div v-for="server in servers" :key="server.id">
        <b-col>
          <b-card
            bg-variant="dark"
            text-variant="white"
            :title="server.name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              {{ server.desc }}
            </b-card-text>

            <router-link
              :to="{ name: 'donates', params: { server: server.name } }"
              ><b-button variant="primary"
                >Список донатов</b-button
              ></router-link
            >
          </b-card>
        </b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Servers",
  data() {
    return {
      servers: []
    };
  },
  mounted() {
    axios
      .get("/api/rest.php?action=get_servers")
      .then(response => {
        this.servers = response.data;
      })
      .catch(() => {
        console.log("An error has happened");
        this.$toasted.error("Не удалось получить список серверов :c", {
          duration: 2000,
          keepOnHover: true,
          theme: "toasted-primary"
        });
      });
  }
};
</script>
