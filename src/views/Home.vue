<template>
  <fragment>
    <header class="header">
      <section class="actions">
        <div>
          <img
            class="logo"
            src="../assets/images/logo.svg"
            alt="Logomarca da Insights"
          />
        </div>
        <div>
          <img
            class="avatar"
            src="https://avatars.githubusercontent.com/u/7530294?s=96&v=4"
            alt=""
          />
        </div>
        <div>
          <button v-on:click="goNew" class="button-go-new-insight">
            <v-icon>mdi-plus</v-icon>
          </button>
        </div>
      </section>
      <section class="info-user">
        <span class="title">Olá, Antonio!</span>
        <div class="email">antonio.pina@g.globo</div>
      </section>
      <section class="sentence-home">
        <hr />
        <div>Feed de <strong>Insights</strong></div>
      </section>
    </header>

    <div v-if="filterCards.length > 0" class="container-cards">
      <div v-for="card of filterCards" :key="card.id">
        <v-card elevation="4" class="mx-auto">
          <v-card-text>
            <div class="text-card-home">
              {{ card.title }}
            </div>
            <div v-if="card.category.length > 0" class="align-categories">
              <button
                class="button-category"
                v-for="category of card.category"
                :key="category"
              >
                {{ category }}
              </button>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div class="get-more-cards">
        <v-icon>mdi-dots-horizontal</v-icon>
        <button>Toque para exibir mais insights</button>
      </div>
    </div>
    <div v-else class="container-erro-search-insight">
      Você ainda não teve um insight igual a esse. <br />
      Que tal publicar um agora?
      <button class="publish-now" v-on:click="goNewParams">Publicar insight agora</button>
    </div>

    <div class="px-4 search-button">
      <v-text-field
        solo
        hide-details
        v-model="search"
        label="Pesquise por termos ou categorias..."
        append-icon="mdi-magnify"
      ></v-text-field>
    </div>
  </fragment>
</template>

<style lang="scss">
@import "../styles/style.base.scss";
.header {
  background: url("../assets/images/background.svg") 0 -90px no-repeat;
  background-size: cover;
  height: 300px;

  .actions {
    height: 100px;
    width: 100%;
    background: url("../assets/images/background.svg") 0 -90px no-repeat;
    background-size: cover;
    padding: 32px 16px 0;

    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 999;

    .logo {
      width: 50px;
    }

    .avatar {
      border-radius: 50%;
      border: 3px solid $color-pink-800;
      width: 56px;
    }

    .button-go-new-insight > i {
      width: 50px;
      background: transparent;
      border: 0;
      color: $color-pink-800 !important;
      font-size: 24px;
    }
  }

  .info-user {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    font-style: italic;
    padding-top: 100px;

    .title {
      font-size: 22px !important;
      font-weight: $text-light;

      height: 26px;
    }
    .email {
      font-size: 12px;
      font-weight: $text-light;

      margin-bottom: 10px;
    }
  }

  .sentence-home {
    font-style: italic;
    font-weight: $text-regular;
    font-size: 16px;
    flex-direction: column;
    display: flex;
    color: $color-pink-800;
    align-items: center;

    hr {
      opacity: 0.5;
      width: 25px;
      border-color: $color-pink-800;
      margin: 10px 0;
    }
  }
}

.container-cards {
  width: 100%;
  position: relative;
  top: -80px;
  padding: 0 16px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  .align-categories {
    display: flex;
    justify-content: center;
    gap: 16px;
    padding: 24px 0 0;
    border-color: $color-pink-800 !important;
    flex-wrap: wrap;

    .button-category {
      color: $color-pink-800;
      font-size: 10px;
      padding: 4px 8px;
      border: 1px solid $color-pink-800;
      border-radius: 4px;
      /* height: ; */
      font-weight: $text-extraBold;
    }
  }

  .get-more-cards {
    widows: 100%;
    padding: 0 16px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.container-erro-search-insight {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .publish-now {
    width: 90%;
    color: #fff;
    background-color: #ed4d77;
    border-radius: 4px;
    margin-top: 16px;
    padding: 8px;
  }
}

.search-button {
  position: fixed;
  width: 100%;
  padding: 0 16px 16px;
  bottom: 0px;
  background-color: $color-gray-100;
}
.text-card-home {
  text-align: center;

  font-size: 14px;
  font-weight: $text-bold;
  font-family: "Exo 2";

  color: $color-gray-900;
}
</style>

<script>
import GetCards from "../services/requestCards";

export default {
  name: "Home",
  data() {
    return {
      cards: [{}],
      filterCards: [{}],
      search: "",
    };
  },
  methods: {
    goNew: function () {
      this.$router.push({ path: "/new" });
      return this.$router.go();
    },
    goNewParams: function () {
      this.$router.push({ path: `/new/${this.search}`});
      return this.$router.go();
    },
  },
  watch: {
    search(newValue, oldValue) {
      let serchComplete = [];
      serchComplete = this.cards.filter((card) => {
        let string = JSON.stringify(card.category);
        return (
          string.toLowerCase().match(newValue) ||
          card.title.toLowerCase().includes(newValue)
        );
      });

      this.filterCards = serchComplete;
      return;
    },
  },
  mounted() {
    GetCards.get().then((res) => {
      this.cards = res.data;
      this.filterCards = res.data;
    });
  },
};
</script>
