<template>
    <div>
        <NavBar></NavBar>
        <slot />
        <NavFooter></NavFooter>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navigationLinks: [
                {
                    link: '/',
                    name: 'Home'
                },
            ]
        }
    }
}
</script>