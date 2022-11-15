<template>
    <section class="section" id="our-team">
        <div class="columns is-desktop">
            <div class="card column" v-for="members in teamMembers">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img :src="members.photo" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">
                                {{ members.name }} - <i>{{ members.git_role }}</i>
                            </p>
                            <p class="subtitle is-6">
                                <a :href="members.git_link">
                                    @{{ members.git_user }}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div 
                    class="content" 
                    v-if="typeof members.contactInfo !== 'undefined'"
                >
                    <h6 class="title is-6 has-text-centered">Contact</h6>
                    <ul>
                        <li v-for="(clink, ckey) in members.contactInfo">
                            <a :href="clink">
                                {{ ckey }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            teamMembers: [
                {
                    name: "Wesley Ford",
                    git_user: "wesdevpro",
                    git_link: "https://github.com/wesdevpro",
                    git_role: "Lead Dev",
                    photo: "https://avatars.githubusercontent.com/u/11604664?v=4",
                    contactInfo: {
                        email: "mailto:wes@wesdev.pro",
                        instagram: "https://www.instagram.com/wesdevpro/"
                    }
                },
                {
                    name: "Michael Mercadante",
                    git_user: "mvmdesigner",
                    git_link: "https://github.com/mvmdesigner",
                    git_role: "Graphic Designer",
                    photo: "https://avatars.githubusercontent.com/u/104705539?v=4",
                },
                {
                    name: "Danny Small",
                    git_user: "dansmalr1527r",
                    git_link: "https://github.com/dansmalr1527r",
                    git_role: "Full Stack Developer",
                    photo: "https://avatars.githubusercontent.com/u/108247048?v=4",
                }
            ]
        }
    }
}
</script>