<template>
  <div class="list">
    <h1>게시글 목록입니다</h1>

    <a v-for="n in num" :key="n">
      <router-link :to="`/list/${n}`">{{ n }}</router-link> |
    </a>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ListView",
  data() {
    return {
      num: 3,
    };
  },
};
</script>
