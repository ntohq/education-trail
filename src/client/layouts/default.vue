<template>
    <div>
        <NavigationBar  :navigationRoutes="navigationLinks"/>
        <slot />
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
                        link: '/#our-team',
                        name: 'Our Team'
                    },
                    {
                        link: '/about',
                        name: 'About Us'
                    }
                ]
            }
        }
    }
</script>