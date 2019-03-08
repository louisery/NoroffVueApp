<template>
  <div class="[ row ]">
    <div v-for="recipe in recipes" :key="recipe.id" class="[ col-sm-12 ]">
      <RecipeComponent
        v-bind:imgThumb="recipe.thumbnail"
        v-bind:title="recipe.title"
        v-bind:ingredients="recipe.ingredients"
        v-bind:moreInfo="recipe.href"
      />
    </div>
  </div>
</template>

<script>
import RecipeComponent from "./components/RecipeComponent.vue";

export default {
  name: "ApiPage",
  components: {
    RecipeComponent
  },
  data() {
    return {
      recipes: []
    };
  },
  beforeMount: function() {
    const app = this;
    const conversionUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://www.recipepuppy.com/api/";

    fetch(conversionUrl + url)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        app.recipes = result.results;
      });
  }
};
</script>

