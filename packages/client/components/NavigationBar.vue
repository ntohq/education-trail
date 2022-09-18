<template>
    <nav>
        <div id="nav-logo"></div>
        <div id="nav-start">
            <NuxtLink v-for="navRoutes in navigationRoutes" :to="navRoutes.link">
                <o-button>{{ navRoutes.name }}</o-button>
            </NuxtLink>
        </div>
        <div id="nav-end"></div>
    </nav>
</template>

<script>
export default {
    props: {
        navigationRoutes: Array,
    }
}
</script>