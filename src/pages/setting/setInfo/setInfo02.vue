<template>
    <div>
        <elm-header :config="configIndex"></elm-header>
        <div>修改内容2222修改内容222222修改内容222222修改内容222222修改内容222222修改内容222222修改内容222222修改内容222222</div>
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
    }
};
</script>
<style scoped>
</style> 