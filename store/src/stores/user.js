import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = ref(null)
    const isLogin = computed(() => user.value);

    const myLogin = function () {
        user.value = {
            name: "Lucas Carr",
            img: "https://randomuser.me/api/portraits/men/68.jpg"
        }
    }

    const youLogout = () => user.value = null;

    return { user, isLogin, login: myLogin, logout: youLogout }
});