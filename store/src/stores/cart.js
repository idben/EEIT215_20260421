import { defineStore } from "pinia";
import { ref, computed } from "vue";


export const useCartStore = defineStore("cart", () => {
    // 在這定義狀態、計算屬性和操作方法

    const items = ref([
        {
            id: 1,
            title: "蘋果",
            quantity: 2,
            price: 50
        },
        {
            id: 2,
            title: "香蕉",
            quantity: 3,
            price: 70
        },
        {
            id: 3,
            title: "芭樂",
            quantity: 4,
            price: 70
        }
    ])

    const totalItems = computed(() => {
        return items.value.reduce((sum, item) => {
            return sum + item.quantity
        }, 0);
    });

    const totalMoney = computed(() => {
        return items.value.reduce((sum, item) => {
            return sum + item.quantity * item.price
        }, 0);
    });

    const isEmpty = computed(() => items.value.length === 0)

    return { items, totalItems, totalMoney, isEmpty }
});