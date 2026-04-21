<script setup>
import { watch } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

watch(() => props.id, (newID, oldID) => {
    console.log(`文章ID變化: 從 ${oldID} 變為 ${newID}`);

})
</script>
<template>
    <h1>閱讀文章</h1>
    <p>這是文章 {{ id }} 的內容</p>
</template>
<style scoped></style>