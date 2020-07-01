import Vue from 'vue'
import Router from 'vue-router'

// Containers
const Home = () => import('@/components/Index')
const Dashboard = () => import('@/components/Dashboard')

const Projects = () => import('@/components/dashboard/Projects')
const MyProjects = () => import('@/components/dashboard/projects/MyProjects')
const SuggestedProjects = () => import('@/components/dashboard/projects/SuggestedProjects')
const ExploreProjects = () => import('@/components/dashboard/projects/ExploreProjects')
const CreateProject = () => import('@/components/dashboard/projects/CreateProject')
const AssignProjects = () => import('@/components/dashboard/projects/AssignProjects')

const Visualize = () => import('@/components/dashboard/projects/Visualize')
const AdaptationPlans = () => import('@/components/dashboard/projects/AdaptationPlans')
const Goals = () => import('@/components/dashboard/projects/wizard/Goals')
const Actors = () => import('@/components/dashboard/projects/wizard/Actors')
const Actions = () => import('@/components/dashboard/projects/wizard/Actions')
const Plans = () => import('@/components/dashboard/projects/wizard/Plans')
const Share = () => import('@/components/dashboard/projects/wizard/Share')
const Visualization = () => import('@/components/dashboard/projects/wizard/Visualization')
const Overview = () => import('@/components/dashboard/projects/charts/Overview')
const Feedback = () => import('@/components/dashboard/projects/charts/Feedback')
const ChartActions = () => import('@/components/dashboard/projects/charts/Actions')
const ChartStreams = () => import('@/components/dashboard/projects/charts/Streams')
const ChartRegion = () => import('@/components/dashboard/projects/charts/Region')
const ChartSubBasins = () => import('@/components/dashboard/projects/charts/SubBasins')
const Login = () => import('@/components/Login')
const SignUp = () => import('@/components/SignUp')

const Community = () => import('@/components/dashboard/Community')
const Members = () => import('@/components/dashboard/community/Members')
const Events = () => import('@/components/dashboard/community/Events')
const Groups = () => import('@/components/dashboard//community/Groups')

const Learn = () => import('@/components/dashboard/Learn')
const Videos = () => import('@/components/dashboard/learn/Videos')


/*const Dashboard = () => import('@/components/dashboard/Dashboard')
const Home = () => import('@/components/interactwel/Home')
const Community = () => import('@/components/interactwel/Community')
const Members = () => import('@/components/interactwel/community/Members')
const Events = () => import('@/components/interactwel/community/Events')
const Groups = () => import('@/components/interactwel/community/Groups')
const Visualization = () => import('@/components/interactwel/Visualization')
const Plan = () => import('@/components/interactwel/visualization/Plan')
//const Project = () => import('@/components/interactwel/visualization/Project')
const Plans = () => import('@/components/interactwel/Plans')
const Projects = () => import('@/components/interactwel/Projects')
const CreateProject = () => import('@/components/interactwel/project/CreateProject')

const PlansOverview = () => import('@/components/interactwel/plans/Overview')
const Feedback = () => import('@/components/interactwel/plans/Feedback')*/

Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Home',
            component: Home,
        },
        {
            path: '/dashboard',
            //redirect: '/pages/404',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/projects',
            //redirect: '/pages/404',
            name: 'Projects',
            component: Projects,
            children: [
                {
                    path: 'my-projects',
                    name: 'MyProjects',
                    component: MyProjects
                },
                {
                    path: 'suggested-projects',
                    name: 'SuggestedProjects',
                    component: SuggestedProjects
                },
                {
                    path: 'explore-projects',
                    name: 'ExploreProjects',
                    component: ExploreProjects
                },
                {
                    path: 'create-project',
                    name: 'CreateProject',
                    component: CreateProject
                },
                {
                    path: 'assign-projects',
                    name: 'AssignProjects',
                    component: AssignProjects
                },
            ]
        },
        {
            path: '/visualize/:projectId',
            name: 'Visualize',
            component: Visualize
        },
        {
            path: '/adaptation-plans/:projectId',
            name: 'AdaptationPlans',
            component: AdaptationPlans,
            children: [
                {
                    path: 'goals',
                    name: 'Goals',
                    component: Goals,
                },
                {
                    path: 'actors',
                    name: 'Actors',
                    component: Actors,
                },
                {
                    path: 'actions',
                    name: 'Actions',
                    component: Actions,
                },
                {
                    path: 'plans',
                    name: 'Plans',
                    component: Plans,
                    children: [
                        {
                            path: 'overview',
                            name: 'Overview',
                            component: Overview
                        },
                        {
                            path: ':planId',
                            name: 'Visualization',
                            redirect: ':planId/actions',
                            component: Visualization,
                            children: [
                                {
                                    path: 'actions',
                                    name: 'ChartActions',
                                    component: ChartActions,
                                },
                                {
                                    path: 'streams',
                                    name: 'ChartStreams',
                                    component: ChartStreams,
                                },
                                {
                                    path: 'region',
                                    name: 'ChartRegion',
                                    component: ChartRegion,
                                },
                                {
                                    path: 'sub-basins',
                                    name: 'ChartSubBasins',
                                    component: ChartSubBasins,
                                },
                                {
                                    path: 'feedback',
                                    name: 'Feedback',
                                    component: Feedback,
                                },
                            ]
                        },

                    ]
                },
                {
                    path: 'share',
                    name: 'Share',
                    component: Share,
                },

            ]
        },
        {
            path: '/signup',
            //redirect: '/pages/404',
            name: 'SignUp',
            component: SignUp,
        },
        {
            path: '/login',
            //redirect: '/pages/404',
            name: 'Login',
            component: Login,
        },
        /*{
            path: '/home',
            //redirect: '/pages/404',
            name: 'Home',
            component: Home,
        },
        {
            path: '/visualization/:projectId',
            //redirect: '/pages/404',
            name: 'Visualization',
            component: Visualization,
            children: [
                {
                    path: ':planId',
                    name: 'Plan',
                    component: Plan
                }
            ]
        },
        {
            path: '/plans/:projectId',
            //redirect: '/pages/404',
            redirect: '/plans/:projectId/overview',
            name: 'Plans',
            component: Plans,
            children: [
                {
                    path: 'overview',
                    name: 'PlansOverview',
                    component: PlansOverview
                },
                {
                    path: 'feedback/:planId',
                    name: 'Feedback',
                    component: Feedback
                },
            ]
        },
        {
            path: '/projects',
            //redirect: '/pages/404',
            redirect: '/projects/my-projects',
            name: 'Projects',
            component: Projects,
            children: [
                {
                    path: 'create-project',
                    name: 'CreateProject',
                    component: CreateProject
                },
                {
                    path: 'my-projects',
                    name: 'MyProjects',
                    component: MyProjects
                },
                {
                    path: 'suggested-projects',
                    name: 'SuggestedProjects',
                    component: SuggestedProjects
                },
                {
                    path: 'explore-projects',
                    name: 'ExploreProjects',
                    component: ExploreProjects
                }
            ]
        }, */

        {
            path: '/learn',
            //redirect: '/pages/404',
            name: 'Learn',
            redirect: '/learn/videos',
            component: Learn,
            children: [
                {
                    path: 'videos/:videoId',
                    name: 'videos',
                    component: Videos
                },
            ]
        },
        {
            path: '/community',
            //redirect: '/pages/404',
            name: 'Community',
            redirect: '/community/members',
            component: Community,
            children: [
                {
                    path: 'members',
                    name: 'Members',
                    component: Members
                },
                {
                    path: 'events',
                    name: 'Events',
                    component: Events
                },
                {
                    path: 'groups',
                    name: 'Groups',
                    component: Groups
                },
            ]
        },
    ]
})
