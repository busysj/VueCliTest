<template>
  <div class="page">
    <p>{{ $route.params.page }}페이지입니다</p>
    <p>{{ datas.board[$route.params.page - 1].memo }}</p>
  </div>
</template>

<script>
import datas from "../assets/data.json";

export default {
  name: "PageComponent",
  data() {
    return {
      datas: datas,
    };
  },
};
</script>
