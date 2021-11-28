<template>
  <fragment>
    <v-snackbar
      :timeout="2000"
      :value="toaster.status"
      :color="toaster.code"
      right
      top
    >
      <v-icon>{{
        toaster.code === "success" ? "mdi-check-circle" : "mdi-alert-circle"
      }}</v-icon>
      {{ toaster.message }}
    </v-snackbar>
    <header class="header-new">
      <button v-on:click="goHome" class="button-go-back">
        <v-icon>mdi-arrow-left</v-icon>
      </button>
      <div>
        CRIAR<br />
        <strong>INSIGHTS</strong>
      </div>
      <div />
    </header>
    <div class="container-new-insight">
      <v-card elevation="4" class="mx-auto">
        <v-card-text>
          <div class="text-card-insight">
            <label class="label">Insight</label>
            <v-textarea
              name="insight"
              no-resize
              autofocus
              label="Escreva aqui o seu insight..."
              v-model="insightText"
              hide-details
            ></v-textarea>
            <div class="text-limit-characters">
              limite de caracteres: {{ insightText.length }}/400
            </div>
            <label class="label">Categoria</label>
            <v-select
              name="categories"
              v-model="value"
              :items="categories"
              item-text="title"
              return-object
              item-color="#ED4D77"
              attach
              chips
              class="select-category-new-insight"
              label="Adicione uma categoria (opicional)..."
              multiple
            >
              <template v-slot:selection="{ attrs, item, select, selected }">
                <v-chip
                  v-bind="attrs"
                  :input-value="selected"
                  close
                  close-icon="mdi-close"
                  @click="select"
                  @click:close="remove(item)"
                >
                  {{ item.title }}
                </v-chip>
              </template>
            </v-select>
          </div>
        </v-card-text>
      </v-card>
      <LoadingIcon :status="loadingTryRequest" :size="70" :width="8"/>
      <v-btn v-if="enableButton" class="btn-publish" v-on:click="publish"
        >Publicar</v-btn
      >
      <v-btn v-else disabled class="btn-publish">Publicar</v-btn>
    </div>
  </fragment>
</template>

<style lang="scss">
@import "../styles/style.base.scss";

.header-new {
  background: url("../assets/images/background.svg") 0 bottom no-repeat;
  background-size: cover;
  height: 100px;
  font-style: italic;
  font-weight: $text-regular;
  font-size: 16px;
  color: $color-pink-800;
  padding: 0 16px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;

  .button-go-back > i {
    color: $color-pink-800 !important;
    font-size: 24px;
  }

  > div:nth-child(3) {
    width: 25px;
  }
}
.container-new-insight {
  padding: 16px;

  .text-card-insight {
    .label {
      text-transform: uppercase;
      font-weight: $text-bold;
      font-style: italic;
    }

    .text-limit-characters {
      font-size: 12px;
      width: 100%;
      text-align: right;
    }
  }
  .v-chip {
    border-radius: 4px !important;
    font-size: 12px !important;
    font-style: italic;
    font-weight: $text-bold;
    color: $color-pink-800 !important;
  }
  .v-list-item__title {
    font-size: 12px !important;
    color: $color-pink-800 !important;
  }
  .btn-publish {
    position: absolute;
    bottom: 16px;
    left: 16px;
    width: calc(100% - 32px) !important;

    font-style: italic;
    color: $shape !important;
    background-color: $color-pink-800 !important;
  }
}
</style>

<script>
import GetCategories from "../services/requestCategory";
import PostInsight from "../services/requestCards";
import LoadingIcon from "../components/LoadingIcon"

export default {
  name: "NewInsight",
  components: {LoadingIcon},
  data() {
    return {
      insightText: this.$route.params.title || ``,
      categoriesName: [],
      categories: [],
      value: [],
      loadingTryRequest: false,
      toaster: { status: false, code: "" },
      insight: [
        {
          insightTitle: "",
          categories: [{}],
        },
      ],
    };
  },
  methods: {
    goHome: function () {
      this.$router.push({ path: "/" });
      return this.$router.go();
    },
    async publish() {
      this.loadingTryRequest = true;
      let data = { title: this.insightText, category: this.value };
      await PostInsight.post(data)
        .then(() => {
          this.insightText = "";
          this.value = [];
          this.toaster = {
            status: true,
            code: "success",
            message: "Insight publicado com sucesso!",
          };
          setTimeout(() => {
            this.toaster = { status: false, message: "", code: "" };
          }, 2500);
        })
        .catch(() => {
          this.toaster = {
            status: true,
            code: "error",
            message: "Ocorreu um problema ao publicar seu insight!",
          };
          setTimeout(() => {
            this.toaster = { status: false, message: "", code: "" };
          }, 2500);
        });
      this.loadingTryRequest = false;
    },
    remove(item) {
      console.log(this.value);
      this.value.splice(this.value.indexOf(item), 1);
      this.value = [...this.value];
    },
  },
  computed: {
    enableButton() {
      return this.insightText !== "" && this.insightText.length <= 400;
    },
  },
  mounted() {
    GetCategories.get().then((res) => {
      this.categories = res.data;
    });
  },
};
</script>