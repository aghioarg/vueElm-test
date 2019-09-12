<template>
    <div>
        <elm-header :config="configIndex"></elm-header>

        <button @click="goback">跳转到上一页</button>
    </div>
</template>
<script>
import elmHeader from "@/components/header.vue";
export default {
    components: { elmHeader },
    data() {
        return {
            configIndex: {
                title: "设置",
                left: {
                    leftIcon: "back",
                    leftText: "",
                    isShowLeftIcon: true
                },
                right: {
                    rightIcon: "",
                    isShowRightIcon: false
                }
            }
        };
    },
    methods: {
        goback() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        }
    }
};
</script>
<style scoped>
button {
    margin-top: 40px;
}
</style> 