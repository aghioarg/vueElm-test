<template>
    <div>
        <elm-header :config="configIndex"></elm-header>
        <div>十斤西红柿十斤西红柿十斤西红柿十斤西红柿十斤西红柿送到沈阳市和平区</div>
        <div>￥100</div>
        <div>queryId:{{queryId}}</div>
    </div>
</template>
<script>
import elmHeader from "@/components/header.vue";
export default {
    components: { elmHeader },
    data() {
        return {
            configIndex: {
                title: "修改内容1",
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
        queryId() {
            return this.$route.query.queryId;
        }
    }
};
</script>
<style scoped>
</style> 