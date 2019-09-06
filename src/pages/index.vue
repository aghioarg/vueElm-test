<template>
    <div>
        <elm-header :config="configIndex"></elm-header>
        <div>首页</div>
        <elm-footer></elm-footer>
    </div>
</template>
<script>
import elmFooter from "@/components/footer.vue";
import elmHeader from "@/components/header.vue";
export default {
    components: { elmFooter, elmHeader },
    data() {
        return {
            configIndex: {
                title: "首页",
                left: {
                    leftIcon: "back",
                    leftText: "返回",
                    isShowLeftIcon: false
                },
                right: {
                    rightIcon: "more",
                    isShowRightIcon: false
                }
            }
        };
    }
};
</script>
<style scoped>
</style> 