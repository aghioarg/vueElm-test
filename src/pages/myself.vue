<template>
    <div>
        <elm-header :config="configMyself"></elm-header>
        <div class="gotoSet">
            <router-link to="/orderList">我的订单</router-link>
        </div>
        <div class="gotoSet">
            <router-link to="/setting">设置</router-link>
        </div>
        <elm-footer></elm-footer>
    </div>
</template>
<script>
import elmFooter from "@/components/footer";
import elmHeader from "@/components/header";
export default {
    components: { elmFooter, elmHeader },
    data() {
        return {
            configMyself: {
                title: "我的",
                left: {
                    leftIcon: "",
                    leftText: "",
                    isShowLeftIcon: false
                },
                right: {
                    rightIcon: "",
                    isShowRightIcon: false
                }
            }
        };
    },
    methods: {}
};
</script>
<style scoped>
.gotoSet {
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #1296db;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
}
</style>
