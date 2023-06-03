<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <a class="btn btn-ghost avatar object-fill">
                <img class="ransition duration-[560ms] ease-in hover:ease-in hover:scale-150 hover:rotate-[-380deg] transform-gpu" src="@/assets/education_trail_emblem.png">
            </a>
            <ul class="menu menu-horizontal px-1">
                <li><a>Item 1</a></li>
                <li tabindex="0">
                    <a>
                        Drop Down
                        <span class="i-mdi-chevron-down hover:i-mdi-chevron-down-alert"></span>
                    </a>
                    <ul class="p-2 bg-base-100 rounded">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <span class="i-mdi-weather-sunny hover:i-mdi-weather-sunny-alert"></span>
            <input type="checkbox" class="toggle mx-2" checked />
            <span class="i-mdi-weather-night hover:i-mdi-weather-night-alert"></span>
        </div>
    </div>
</template>

<script>
// export default {
//     props: {
//         navigationRoutes: Array,
//     },
//     data() {
//         return {
//             isActive: false,
//             showNavbar: true
//         }
//     }
// }
</script>