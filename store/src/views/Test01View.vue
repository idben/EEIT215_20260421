<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore();
const { totalItems, totalMoney, isEmpty, items } = storeToRefs(cartStore);
const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } = cartStore;
</script>
<template>
    <div>
        <h2>購物車測試</h2>
        <p>商品數：{{ totalItems }}</p>
        <p>總金額：{{ totalMoney }}</p>
        <p>是否為空：{{ isEmpty }}</p>

        <button class="btn btn-primary me-1"
            @click="addItem({ id: 9, title: '橘子', price: 2000, quantity: 5 })">加入商品</button>
        <button class="btn btn-primary position-relative" @click="clearCart()">
            清空
            <span v-if="!cartStore.isEmpty"
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{ totalItems }}
                <span class="visually-hidden">unread messages</span>
            </span>
        </button>

        <ul>
            <li v-for="item in items" class="d-flex mb-1">
                {{ item.title }} × {{ item.quantity }} = {{ item.quantity * item.price }}
                <div class="btn-group btn-group-sm ms-auto" role="group" aria-label="Small button group">
                    <button type="button" class="btn btn-outline-primary">-</button>
                    <button type="button" class="btn btn-outline-primary">x</button>
                    <button type="button" class="btn btn-outline-primary">+</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>