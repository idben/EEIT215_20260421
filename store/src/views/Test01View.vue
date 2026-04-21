<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const cartStore = useCartStore();
const { totalItems, totalMoney, subTotal, isEmpty, items } = storeToRefs(cartStore);
const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } = cartStore;

const userStore = useUserStore();
const { isLogin, user } = storeToRefs(userStore)
</script>
<template>
    <div>
        <h2>購物車測試</h2>
        <p>商品數：{{ totalItems }}</p>
        <p>總金額：
            <span :class="{ 'text-decoration-line-through': isLogin }">{{ totalMoney }}</span>
            <span v-if="isLogin" class="bigred">{{ subTotal }}</span>
        </p>
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
                    <button @click="decreaseQuantity(item.id)" type="button" class="btn btn-outline-primary">-</button>
                    <button @click="removeItem(item.id)" type="button" class="btn btn-outline-primary">x</button>
                    <button @click="increaseQuantity(item.id)" type="button" class="btn btn-outline-primary">+</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.bigred {
    font-size: 60px;
    color: #ef2424;
    font-weight: bold;
}
</style>