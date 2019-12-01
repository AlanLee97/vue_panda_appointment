<template>
    <div>

        <center>
            <h1>
                我是主页
            </h1>
        </center>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            goPage:function (path) {
                this.gotoPage(path);
            }
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
</style>