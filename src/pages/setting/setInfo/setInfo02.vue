<template>
    <div>
        <elm-header :config="configIndex"></elm-header>
        <div>2222西红柿牛腩 大份</div>
        <div>￥68</div>
        <div>paramsId:{{paramsId}}</div>
    </div>
</template>
<script>
import elmHeader from "@/components/header.vue";
export default {
    components: { elmHeader },
    data() {
        return {
            configIndex: {
                title: "修改内容2",
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
    computed: {
        paramsId() {
            return this.$route.params.paramsId;
        }
    }
};
</script>
<style scoped>
</style> 