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
          <button v-on:click="goNew"><v-icon>mdi-plus</v-icon></button>
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

    <div class="container-cards">
      <div v-for="card of cards" :key="card.title">
        <v-card elevation="4" class="mx-auto">
          <v-card-text>
            <div class="text-card-home">
              {{ card.title }}
            </div>
            <div v-if="card.category" class="align-categories">
              <v-btn
                elevation="2"
                outlined
                class="button-category"
                v-for="category of card.category"
                :key="category"
              >
                {{ category }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </div>

      <div class="get-more-cards">
        <v-icon>mdi-dots-horizontal</v-icon>
        <button>Toque para exibir mais insights</button>
      </div>
    </div>
    <div class="px-4 search-button">
      <v-text-field
        solo
        hide-details
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

    button > i {
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
      color: $color-pink-800 !important;
      font-size: 10px !important;
      padding: 8px !important;
      height: unset !important;
      font-weight: $text-extraBold !important;
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
  methods: {
    goNew: function (event) {
      this.$router.push({ path: "/new" });
      return this.$router.go();
    },
  },
  data() {
    return {
      cards: [{}],
    };
  },
  mounted() {
    GetCards.get().then((res) => {
      this.cards = res.data;
      console.log(res.data);
    });
  },
};
</script>
