import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = ref(null)
    const isLogin = computed(() => user.value);

    const myLogin = async function () {
        // user.value = {
        //     name: "Lucas Carr",
        //     img: "https://randomuser.me/api/portraits/men/68.jpg"
        // }
        const url = "https://randomuser.me/api";
        // fetch().then().then().catch()
        const response = await fetch(url, { method: "GET" })
        const result = await response.json();
        console.log(result);
        user.value = {
            name: result.results[0].first,
            img: result.results[0].picture.large
        }
    }

    const youLogout = () => user.value = null;

    return { user, isLogin, login: myLogin, logout: youLogout }
});