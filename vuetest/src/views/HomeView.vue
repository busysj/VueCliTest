<template>
  <div class="home">
    <h1>게시글 목록입니다</h1>
    <a v-for="n in num" :key="n">
      <router-link :to="`/list/${n}`">{{ n }}</router-link> |
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      num: 3,
    };
  },
};
</script>
