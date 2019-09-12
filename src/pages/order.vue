<template>
    <div>
        <elm-header :config="configOrder"></elm-header>
        <div>订单</div>
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
            configOrder: {
                title: "订单",
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
    }
};
</script>
<style scoped>
</style>