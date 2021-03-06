import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 plugins: [createPersistedState()],
 state: {
    feedbackProvided:false,
    step1:false,
    step2:false,
    step3:false,
    step4:false,
    adaptationPlans:[],
    currentAdaptationPlan:{
        projectId:'',
        selectedGoals:[],
        selectedActors:[],
        selectedActions:[]
    },
    wizardFlowStarted:false

 },
 getters: {},
 mutations: {
    changeName (state, payload) {
        state.user.fullName = payload
    },
    setProjectId(state,payload){
        state.currentAdaptationPlan.projectId=payload;
    },
    setSelectedGoals(state, payload){
        state.currentAdaptationPlan.selectedGoals=payload;
    },
    setSelectedActors(state, payload){
        state.currentAdaptationPlan.selectedActors=payload;
    },
    setSelectedActions(state, payload){
        state.currentAdaptationPlan.selectedActions=payload;        
    },
    setFeedbackProvided(state, payload){
        state.feedbackProvided=payload;
    },
    addAdaptationPlans(state, payload){
        state.adaptationPlans=[...state.adaptationPlans,payload];
    },
    setStep1(state, payload){
        state.step1=payload;
    },
    setStep2(state, payload){
        state.step2=payload;
    },
    setStep3(state, payload){
        state.step3=payload;
    },
    setStep4(state, payload){
        state.step4=payload;
    },
    setWizardFlowStarted(state,payload){
        state.wizardFlowStarted=payload;
    },
    resetWizardFlow(state,payload){
        state.feedbackProvided=false;
        state.step1=false;
        state.step2=false;
        state.step3=false;
        state.step4=false;
        state.adaptationPlans=[];
        state.currentAdaptationPlan={
            projectId:'',
            selectedGoals:[],
            selectedActors:[],
            selectedActions:[]
        };
        state.wizardFlowStarted=false
    }

 },
 actions: {}
});