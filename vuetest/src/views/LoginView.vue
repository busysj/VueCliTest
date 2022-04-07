<template>
  <div>
    아이디<input type="text" v-model="user" /> <br />
    패스워드<input type="password" /><br />
    <button @click="loginUser">로그인</button>
    <button @click="$router.push('/')">취소</button>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    loginUser() {
      this.$emit("login-user", this.user);
      this.$router.push("/");
    },
  },
};
</script>
