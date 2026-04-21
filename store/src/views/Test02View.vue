<script setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();

const { isLogin, user } = storeToRefs(userStore)

</script>
<template>
    <button v-if="!isLogin" class="btn btn-primary">登入</button>
    <button v-else class="btn btn-danger">登出</button>
</template>
<style scoped></style>