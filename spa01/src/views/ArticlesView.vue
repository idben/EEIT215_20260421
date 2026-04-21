<script setup>
// 路由器、文章資料、導航函式
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const articles = ref([
    { id: 1, title: 'Vue 3 新手入門', summary: '從零開始學習 Vue 3 的基礎概念' },
    { id: 2, title: '深入 Composition API', summary: '了解 setup、ref、reactive 等核心 API' },
    { id: 3, title: 'Vue Router 完全指南', summary: '掌握 SPA 路由管理的所有技巧' }
])
</script>

<template>
    <div>
        <!-- 標題 -->
        <h1>文章列表</h1>
        <!-- 文章卡片迴圈 -->
        <div class="card mb-3" v-for="article in articles">
            <div class="card-header bg-white border-bottom-0">
                <h3>{{ article.title }}</h3>
            </div>
            <div class="card-body">
                <p>{{ article.summary }}</p>
            </div>
            <div class="card-footer d-flex bg-white border-top-0">
                <RouterLink :to="{ name: 'ArticleDetail', params: { id: article.id } }" class="btn btn-primary ms-auto">
                    閱讀更多
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped></style>