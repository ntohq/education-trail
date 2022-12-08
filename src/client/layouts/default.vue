<template>
    <div>
        <NavigationBar  :navigationRoutes="navigationLinks"/>
        <slot />
        <NavigationFooter/>
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
                    {
                        link: '/about',
                        name: 'About Us'
                    },
                    {
                        link: '/news',
                        name: 'News'
                    }
                ]
            }
        }
    }
</script>