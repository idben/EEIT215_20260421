<script setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();

const { isLogin, user } = storeToRefs(userStore)
const { login, logout } = userStore;

</script>
<template>
    <img :src="user && user.img" alt="">
    <button @click="login()" v-if="!isLogin" class="btn btn-primary">登入</button>
    <button @click="logout()" v-else class="btn btn-danger">登出</button>
</template>
<style scoped></style>