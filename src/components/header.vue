<template>
    <div>
        <mt-header :title="config.title">
            <router-link to=""
                         slot="left">
                <mt-button :icon="config.left.leftIcon"
                           @click.native="$router.back(-1)"
                           v-if="config.left.isShowLeftIcon">{{config.left.leftText}}</mt-button>
            </router-link>
            <mt-button :icon="config.right.rightIcon"
                       slot="right"
                       v-if="config.right.isShowRightIcon"></mt-button>
        </mt-header>
    </div>
</template>

<script>
export default {
    props: {
        config: {
            type: Object,
            default: function() {
                return {
                    title: "首页",
                    left: {
                        leftIcon: "back",
                        leftText: "返回",
                        isShowLeftIcon: false
                    },
                    right: {
                        rightIcon: "more",
                        isShowRightIcon: true
                    }
                };
            }
        }
    }
};
</script>

<style scoped>
.mint-header {
    background-color: #1296db;
}
</style>