<template>
    <section class="section is-medium">
        <h1 class="title is-1 has-text-centered">Our Team</h1>
        <div class="team-container">
            <div class="card" v-for="members in teamMembers">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img :src="members.photo" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4" style="font-size: initial;"><span class="line">{{ members.name }}</span> - <i>{{ members.git_role }}</i></p>
                            <p class="subtitle is-6">
                                <a :href="members.git_link">
                                    @{{ members.git_user }}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.team-container {
    display: grid;
    gap: 1.75rem;
}


.media-content {
    overflow: hidden;
}

span.line {
  display: inline-block;
  font-size: initial
}

@media (min-width: 50em) { 
    .team-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>

<script>
export default {
    data() {
        return {
            teamMembers: [
                {
                    name: "Wesley Ford",
                    git_user: "wesdevpro",
                    git_link: "https://www.instagram.com/wesdevpro",
                    git_role: "Lead Dev",
                    photo: "https://avatars.githubusercontent.com/u/11604664?v=4",
                    contactInfo: {
                        email: "mailto:wes@wesdev.pro",
                    }
                },
                {
                    name: "Michael Mercadante",
                    git_user: "mvmdesigner",
                    git_link: "https://www.instagram.com/mvmdesigner",
                    git_role: "Graphic Designer",
                    photo: "https://avatars.githubusercontent.com/u/104705539?v=4",
                },
                {
                    name: "Danny Small",
                    git_user: "dansmalr1527",
                    git_link: "https://github.com/dansmalr1527",
                    git_role: "Full Stack Developer",
                    photo: "https://avatars.githubusercontent.com/u/108247048?v=4",
                },
                {
                    name: "Daniel York",
                    git_user: "Dan-York01",
                    git_link: "https://github.com/Dan-York01",
                    git_role: "Backend Developer",
                    photo: "https://avatars.githubusercontent.com/u/110703781?v=4",
                }
            ]
        }
    }
}
</script>