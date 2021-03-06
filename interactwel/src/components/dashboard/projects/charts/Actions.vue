<template>
    <div id="graph" class="card">

        <div class="card-header"><span v-on:click="dismiss" class="close">  Close</span>
            <strong style="font-size:18px">Adaptation Plans</strong>
        </div>
        <div class="card-body">
            <b-row>
                <b-col lg="6">
                    <b-badge id="tooltip-button-1" class="info-button-path" pill variant="secondary" v-b-tooltip.hover>
                        How to read this chart?
                    </b-badge>
                    <b-tooltip target="tooltip-button-1" placement="bottom">
                        <p aling="justify">
                            This chart shows the actions that different actors will take for this adaptation plan.</p>
                        <p aling="justify">
                            Click on each actor box to show the actions that actor will take over time.  Where the line shifts up or down represents when an actor shifts from one action to another.</p>
                    </b-tooltip>
                </b-col>
            </b-row>

            <b-tabs pills small align="right">
                <b-tab title="Gannt" active><b-card-text>
                    <gannt-chart></gannt-chart>
                </b-card-text></b-tab>
                <b-tab title="Pathways"><b-card-text>
                    <actions-graph-stepped-lines></actions-graph-stepped-lines>
                </b-card-text></b-tab>
            </b-tabs>




            <!--<b-tabs card>
                <b-tab title="Pathways" active>
                    <div class="card-body no-padding">
                        <div class="filter-options-container">
                            <div v-for="actor in selectedActors" v-bind:key="actor.id"
                                 class="form-check form-check-inline filter-options"
                                 :style="{ 'background-color': pathColors[actor.id]}">
                                <input class="form-check-input"
                                       type="checkbox"
                                       :name="actor.actor"
                                       :value="actor.id"
                                       :id="actor.id"
                                       @change="inputChanged($event , actor)">
                                <label class="form-check-label small" :for="actor.id">{{actor.actor}}</label>
                            </div>
                        </div>
                        <div class="graph-title"> Actions taken by Actors</div>
                        <pathways-graph :actions="actions" :data="graphData"></pathways-graph>
                        <div class="x-label">Time</div>
                        <div class="y-label">Actions</div>
                    </div>
                </b-tab>
                <b-tab title="Gannt Chart">
                    <div class="card-body no-padding">
                        <gannt-chart></gannt-chart>
                    </div>
                </b-tab>
            </b-tabs>-->
        </div>
    </div>
</template>

<script>
    import JSONData from "../../../../../public/static/result_action_plans.json";
    import ActionsGraphSteppedLines from "./data/ActionsGraphSteppedLines.vue";
    import GanntChart from "./data/GanntChart.vue";
    import EventBus from './../../../../event-bus';

    export default {
        name: 'Actions',

        components: {
            ActionsGraphSteppedLines,
            GanntChart,
            'gannt-chart': GanntChart,
            'actions-graph-stepped-lines': ActionsGraphSteppedLines
        },

        props: {
            /*goals: {
                type: Array,
                default: []
            },*/
            /*actors: {
                type: Array,
                default: []
            },
           actions: {
                type: Array,
                default: []
            },*/
           /* selectedGoals: {
                type: Array,
                default: []
            },
            selectedActors: {
                type: Array,
                default: []
            },
            selectedActions: {
                type: Array,
                default: []

            }*/
        },

        data() {
            return {
                ganntChartVisibility: true,
                ActionsGraphSteppedLinesVisibility: false,
                colorIndex: 0,
                isPlanGraphActive: false,
                isCostGraphActive: false,
                planName: "Adaptation Plan 1",

                selectedKeyList: [],

                costVisibility: true,
                planVisibility: true,

                pathColors: [
                    "#0176b8",
                    "#186a3b",
                    "#4e85eb",
                    "#eb4e4e",
                    "#7b549c",
                    "#c73431",
                    "#d2701b",
                    "#219b9f",
                    "#d2a02f",
                    "#dc4b8a",
                    "#6ba629",
                    "#737478"
                ]
            };
        },
        computed: {
            jsonData() {
                return JSONData;
            },

            actions() {
                return this.jsonData["Actions_map"];
            },

            adaptationPlans() {
                return this.jsonData["Adaptation_plans"]
            },

            graphData() {
                var adaptationPlan = this.planName;

                return Object.keys(this.jsonData["Adaptation_plans"][adaptationPlan])
                    .map(key => {
                        return {
                            key: key,
                            value: this.jsonData["Adaptation_plans"][adaptationPlan][key]
                        };
                    })
                    .filter(d => {
                        if (this.selectedKeyList.findIndex(k => k === d.key) > -1) {
                            //console.log(this.selectedKeyList.findIndex(k => k === d.key) > -1);
                            return true;
                        } else {
                            return false;
                        }
                    });

            },
            actors() {
                return Object.keys(this.jsonData["Actors_map"]).map(key => {
                    return {
                        key: parseInt(key, 10) + 1,
                        value: this.jsonData["Actors_map"][key]
                    };
                });
            },

            actions1() {
                return Object.keys(this.jsonData["Actions_map"]).map(key => {
                    return {
                        key: parseInt(key, 10) + 1,
                        value: this.jsonData["Actions_map"][key]
                    };
                });
            }
        },

        mounted() {
            let $this = this;
            EventBus.$on('CLICK_ITEM_SIDEBAR', function (planName) {
                $this.showChart(planName);
            })
            EventBus.$on('CLICK_ITEM_PLAN', function () {
                $this.showPlanGraph();
            })
            EventBus.$on('CLICK_ITEM_COST', function () {
                $this.showCostGraph();
            })
        },

        methods: {
            dismiss() {
                EventBus.$emit('CLOSE');
            },
            inputChanged(event, item) {
                if (event.target.checked) {
                    this.selectedKeyList.push(event.target.value);
                    item.active = !item.active;

                } else {
                    const index = this.selectedKeyList.findIndex(
                        k => k === event.target.value
                    );
                    this.selectedKeyList.splice(index, 1);

                }
            },

            showChart: function (selectedPlan) {
                this.planName = selectedPlan;
                this.showPlanGraph()
            },

            showCostGraph() {
                this.isCostGraphActive = true;
                this.isPlanGraphActive = false;
                this.costVisibility = false;
                this.planVisibility = false;
            },

            showPlanGraph() {
                this.isPlanGraphActive = true;
                this.isCostGraphActive = false;
                this.costVisibility = true;
                this.planVisibility = true;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    .y-label {
        position: absolute;
        top: 60%;
        left: 0;
        font-size: 12px;
        -ms-transform: rotate(-90deg); /* IE 9 */
        -webkit-transform: rotate(-90deg); /* Safari */
        transform: rotate(-90deg); /* Standard syntax */
    }

    .x-label {
        position: relative;

        left: 60%;
        font-size: 12px;
    }

    .graph-title {
        font-size: 12px;
        font-weight: bold;
        position: relative;
        left: 50%;
        margin-bottom: 20px;
    }

    .filter-options-container {
        text-align: left;
    }

    .filter-options {
        padding: 5px;
        color: #FFFFFF;
        background-color: #EFEFEF;
        margin: 5px !important;
        border-radius: 5px;
        font-size: 12px;
    }

    .info-button-path {
        padding: .5em .5em !important;
    }

    .toggleGraphType{
        float: right;
    }


</style>
