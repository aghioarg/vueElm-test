<template>
    <div>
        <elm-header :config="configIndex"></elm-header>
        <div @click="goDetail1"
             class="myddBox">订单1：十斤西红柿</div>
        <div class="myddBox"
             @click="goDetail2">订单2：西红柿牛腩</div>
        <router-link to="/setting/setInfo/setInfo03"
                     class="myddBox">订单3：十斤牛肉</router-link>
    </div>
</template>
<script>
import elmHeader from "@/components/header.vue";
export default {
    components: { elmHeader },
    data() {
        return {
            configIndex: {
                title: "订单列表",
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
        goDetail1() {
            this.$router.push({
                path: "/setting/setInfo/setInfo01",
                query: {
                    queryId: "01"
                }
            });
        },
        goDetail2() {
            this.$router.push({
                name: "setInfo02",
                params: {
                    paramsId: "02"
                }
            });
        }
    }
};
</script>
<style scoped>
.myddBox {
    width: 100%;
    display: block;
    line-height: 30px;
    color: #1296db;
}
</style> 