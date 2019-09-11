<template>
    <div>
        <elm-header :config="configIndex"></elm-header>
        <div>修改内容11111修改内容11111修改内容11111修改内容11111修改内容11111修改内容11111修改内容11111</div>
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
    }
};
</script>
<style scoped>
</style> 