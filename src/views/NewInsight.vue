<template>
  <fragment>
    <header class="header-new">
      <button v-on:click="goHome" class="button-go-back"><v-icon>mdi-arrow-left</v-icon></button>
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
              :items="categoriesName"
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
                  {{ item }}
                </v-chip>
              </template>
            </v-select>
          </div>
        </v-card-text>
      </v-card>
      <v-btn v-if="enableButton" class="btn-publish" v-on:click="publish">Publicar</v-btn>
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
  .v-list-item__title{
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

export default {
  name: "NewInsight",
  data() {
    return {
      insightText: this.$route.params.title || ``,
      categoriesName: [],
      categories: [{}],
      value: [],
      insight: [{
        insightTitle: '',
        categories: []
      }]
    };
  },
  methods: {
    goHome: function () {
      this.$router.push({path: '/'})
      return this.$router.go() 
    },
    async publish(){
      let data = {id: +new Date(),title: this.insightText, category: this.value, tagExist: this.value.length > 0 ? true : false};
      let result = await PostInsight.post(data)
      console.log(result)
    },
    remove(item) {
      this.categoriesName.splice(this.categoriesName.indexOf(item), 1);
      this.categoriesName = [...this.categoriesName];
    },
    filterCategories: function (categories, categoriesName) {
      categories.forEach((item) => {
        let uppercase = item.name.toUpperCase();
        categoriesName.push(uppercase);
      });
      console.log(this.$route.params.title)
      return;
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
      this.filterCategories(this.categories, this.categoriesName);
    });
  },
};
</script>