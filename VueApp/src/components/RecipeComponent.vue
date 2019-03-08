<template>
  <div class="[ row ]">
    <div class="[ col-sm-4 ]">
      <div class="[ card ]">
        <div>
          <img :src="imgThumb">
          <br>
        </div>
        <div class="[ card--info ]">
          <br>
          <b>Title:</b>
          {{title}}
          <br>
          <b>Ingredients:</b>
          {{ingredients}}
          <br>
          <b>More Info:</b>
          {{moreInfo}}
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeComponent",
  props: ["imgThumb", "title", "ingredients", "moreInfo"]
};
</script>

<style scoped>
.card {
  border: 3px solid lightseagreen;
  border-radius: 5px;
  padding: 0px 20px 30px;
  margin: 10px;
}

.card img {
  width: 50%;
  padding-top: 30px;
}

.card b {
  font-weight: bold;
}
</style>


