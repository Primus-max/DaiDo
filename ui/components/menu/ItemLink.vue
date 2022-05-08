<template>
    <li>
        <router-link :to="item.path || ''">
            <slot name="before"></slot> {{ item.title }}
        </router-link>
    </li>
</template>

<script>

    export default {
        props: ['item']


    }
</script>

<style scoped>

</style>