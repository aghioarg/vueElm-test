<template>
    <div>
        <elm-header :config="configSearch"></elm-header>
        <div>搜索</div>
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
            configSearch: {
                title: "搜索",
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