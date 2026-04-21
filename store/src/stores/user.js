import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = ref(null)
    const isLogin = ref(false);

    return { user, isLogin }
});