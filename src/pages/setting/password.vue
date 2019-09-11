<template>
    <div>
        <elm-header :config="configIndex"></elm-header>
        <div>密码 ******</div>
        <button @click="goback">跳转到设置</button>
    </div>
</template>
<script>
import elmHeader from "@/components/header.vue";
export default {
    components: { elmHeader },
    data() {
        return {
            configIndex: {
                title: "修改密码",
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
            this.$router.replace({ path: "/setting" });
        }
    }
};
</script>
<style scoped>
</style> 