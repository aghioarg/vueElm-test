<template>
    <div>
        <elm-header :config="configMyself"></elm-header>
        <div class="gotoSet">
            <router-link to="/setting">我的设置</router-link>
        </div>
        <div class="gotoSet">
            <router-link to="/password">修改密码</router-link>
        </div>
        <div>{{username}}
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
