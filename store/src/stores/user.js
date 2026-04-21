import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = ref(null)
    const isLogin = computed(() => user.value);

    const myLogin = async function () {
        // 第一次: 設計的假資料
        // user.value = {
        //     name: "Lucas Carr",
        //     img: "https://randomuser.me/api/portraits/men/68.jpg"
        // }
        // 第二次: 從 randomuser 網站的 api 實際介接
        const url = "https://randomuser.me/api";
        // fetch().then().then().catch()
        const response = await fetch(url, { method: "GET" })
        const result = await response.json();
        console.log(result);
        user.value = {
            name: result.results[0].name.first + " " + result.results[0].name.last,
            img: result.results[0].picture.large
        }
    }

    const youLogout = () => user.value = null;

    return { user, isLogin, login: myLogin, logout: youLogout }
});