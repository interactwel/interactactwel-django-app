<template>
    <div>
        <component v-bind:is="component='Header'"></component>
        <b-container fluid class="main">
            <b-row>
                <b-col>
                    <h3 class="mb-3">Projects</h3>
                </b-col>
                <!--<b-col align="right">
                    <b-button>Create New Project</b-button>
                </b-col>-->
            </b-row>

            <b-row>
                <b-col>
                    <b-tabs>
                        <b-tab :active="$route.path === '/projects/my-projects'" title="My Projects" v-on:click='loadTabContent("/projects/my-projects")'></b-tab>
                        <b-tab :active="$route.path === '/projects/suggested-projects'" title="Invited Projects" v-on:click='loadTabContent("/projects/suggested-projects")'></b-tab>
                        <b-tab :active="$route.path === '/projects/explore-projects'" title="Explore Projects" v-on:click='loadTabContent("/projects/explore-projects")'></b-tab>
                        <b-tab :active="$route.path === '/projects/create-project'" title="Create New Project" v-on:click='loadTabContent("/projects/create-project")'></b-tab>
                        <b-tab :active="$route.path === '/projects/assign-projects'" title="Assign Projects" v-on:click='loadTabContent("/projects/assign-projects")'></b-tab>
                    </b-tabs>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                <router-view></router-view>
                </b-col>
            </b-row>
        </b-container>
        <component v-bind:is="component='Footer'"></component>
    </div>
</template>

<script>
    import Header from './../Header.vue';
    import Footer from './../Footer.vue';

    export default {
        name: 'Dashboard',
        components: {
            Header, Footer
        },
        props: {
            msg: String
        },

        data(){
            return{

                auth: null,

                isActive : true,
                currentPage : null,
                activeClass : 'active',
            }
        },

        mounted(){
            const SessionData = AiravataPortalSessionData;
            this.auth = SessionData.username;
            this.currentPage = this.$route.name

        },

        computed: {
            currentRoute(){
                return this.$route.path;
            }
        },

        methods: {

            loadTabContent(path) {
                this.$router.push(path);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        background-color: #efefef;
        padding: 1rem 2rem;
        min-height: 90vh;
        text-align: left;
    }

    a {
        color: #42b983;
    }
</style>
