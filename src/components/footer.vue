<template>
    <div>
        <div class="footGuide">
            <router-link to="/"
                         exact>
                <img src="../../static/images/foot-ico.png">
                首页
            </router-link>
            <router-link to="/search">
                <img src="../../static/images/foot-ico.png">
                搜索
            </router-link>
            <router-link to="/order">
                <img src="../../static/images/foot-ico.png">
                订单
            </router-link>
            <router-link to="myself">
                <img src="../../static/images/foot-ico.png">
                我的
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedFoot: "index"
        };
    }
};
</script>

<style scoped>
.router-link-active {
    color: #3190e8;
}
.footGuide {
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 55px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.footGuide a {
    display: block;
    padding: 7px 0;
    flex: 1;
    font-size: 12px;
    columns: #999;
    text-align: center;
}
.footGuide img {
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;
    display: block;
}
</style>