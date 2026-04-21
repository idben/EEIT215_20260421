import { defineStore, storeToRefs } from "pinia";
import { ref, computed, watch } from "vue";
import { useUserStore } from "./user";


export const useCartStore = defineStore("cart", () => {
    // 在這定義狀態、計算屬性和操作方法
    const userStore = useUserStore();
    const { isLogin, user } = storeToRefs(userStore)

    const discount = computed(() => isLogin ? 0.9 : 1)


    // const user = {
    //     id: 33445566,
    //     name: "Ben Chen",
    //     email: "idben.chen@gmail.com"
    // }

    // console.log(user.id);
    // console.log(user.name);

    // const id = user.id
    // const name = user.name

    // 物件的解構賦值, 等同上面的寫法
    // const { id, name } = user;
    // console.log(id);
    // console.log(name);




    const savedCart = localStorage.getItem("cart0001");
    const items = ref(savedCart ? JSON.parse(savedCart) : [
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

    const subTotal = computed(() => {
        const money = items.value.reduce((sum, item) => {
            return sum + item.quantity * item.price
        }, 0);
        return Math.round(money * discount.value)
    });

    const isEmpty = computed(() => items.value.length === 0)

    const clearCart = () => {
        items.value = [];
    }

    function addItem(product) {
        const existing = items.value.find(i => i.id === product.id)
        if (existing) {
            existing.quantity++
        } else {
            if (product.quantity) {
                items.value.push({ ...product })
            } else {
                items.value.push({ ...product, quantity: 1 })
            }

        }
    }

    function removeItem(productId) {
        const index = items.value.findIndex(i => i.id === productId)
        if (index > -1) items.value.splice(index, 1)
    }

    function increaseQuantity(productId) {
        const item = items.value.find(i => i.id === productId)
        if (item) item.quantity++
    }

    function decreaseQuantity(productId) {
        const item = items.value.find(i => i.id === productId)
        if (item && item.quantity > 1) item.quantity--
    }

    watch(
        items,
        (newItems) => {
            localStorage.setItem("cart0001", JSON.stringify(newItems));
        },
        { deep: true }
    );

    return { items, totalItems, totalMoney, subTotal, isEmpty, clearCart, addItem, removeItem, increaseQuantity, decreaseQuantity }
});