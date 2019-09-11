<template>
    <div>
        <elm-header :config="configIndex"></elm-header>
        <router-link to="/setting/setInfo01">修改昵称1</router-link>
        <router-link to="/setting/setInfo02">修改图片2</router-link>
        <router-link to="/setting/setInfo03">修改资料3</router-link>
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
    },
    computed: {
        username() {
            return this.$route.params.username;
        }
    }
};
</script>
<style scoped>
button {
    margin-top: 40px;
}
</style> 