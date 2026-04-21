<script setup>
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

watch(() => props.id, (newID, oldID) => {
    console.log(`文章ID變化: 從 ${oldID} 變為 ${newID}`);
});

const goBack = function () {
    router.back();
}
</script>
<template>
    <div class="d-flex align-items-center">
        <h1>閱讀文章</h1>
        <button @click="goBack" class="btn btn-primary btn-sm ms-auto">回上一頁</button>
    </div>

    <p>這是文章 {{ id }} 的內容</p>
</template>
<style scoped></style>