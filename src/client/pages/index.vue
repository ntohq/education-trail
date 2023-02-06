<template>
    <div class="layout-container">
        <PublicHomeHero></PublicHomeHero>
        <PublicHomeAbout></PublicHomeAbout>
        <Countdown></Countdown>
        <PublicOurTeam></PublicOurTeam>
        <PublicPricing></PublicPricing>
    </div>
</template>

<script setup>
useHead({
    title: 'Education Trail - Home',
    meta: [
        { name: 'description', content: 'The home of the education trail! The Education trail is a powerful tool that makes grade analytics simple-created to help anyone to reach their education goals.' },
    ]
})
</script>