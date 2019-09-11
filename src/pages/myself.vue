<template>
    <div>
        <elm-header :config="configMyself"></elm-header>
        <div>我的</div>
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
    }
};
</script>
<style scoped>
</style>
