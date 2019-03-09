<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
    }
</script>

<style lang="scss">
    @import './assets/styles/mixin';

    html {
        height: 100%;
        background: $background-color;
    }

    body {
        @include fontSize($font-medium-s);
        margin: 0;
        height: 100%;
        min-height: 100vh;
        padding-bottom: env(safe-area-inset-bottom);
        font-family: $font-sans-serif;
        color: $text-color;
    }

    // svg init
    .svg-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        color: inherit;
        vertical-align: middle;
        fill: none;
        stroke: currentColor;
    }

    .svg-fill {
        fill: currentColor;
        stroke: none;
    }

</style>
