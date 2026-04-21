<script setup>
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();
</script>
<template>
    <div>
        <h2>購物車測試</h2>
        <p>商品數：{{ cartStore.totalItems }}</p>
        <p>總金額：{{ cartStore.totalMoney }}</p>
        <p>是否為空：{{ cartStore.isEmpty }}</p>

        <button class="btn btn-primary me-1">加入商品</button>
        <button class="btn btn-primary">清空</button>

        <ul>
            <li v-for="item in cartStore.items">
                {{ item.title }} × {{ item.quantity }} = {{ item.quantity * item.price }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>