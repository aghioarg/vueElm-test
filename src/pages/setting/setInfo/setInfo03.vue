<template>
    <div>
        <elm-header :config="configIndex"></elm-header>
        <div>修改内容333333修改内容333333修改内容333333修改内容333333修改内容333333修改内容333333修改内容333333</div>
    </div>
</template>
<script>
import elmHeader from "@/components/header.vue";
export default {
    components: { elmHeader },
    data() {
        return {
            configIndex: {
                title: "修改内容3",
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