import Vue from 'vue'
import Vuex from 'vuex'
import {
    team,
    metrics
} from '@/api/mock'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        team: team,
        metrics: metrics
    },
    mutations: {
        updateTeam(state, newValue) {
            state.team = newValue
        },
        updateMetrics(state, newValue) {
            state.metrics = newValue
        }
    }
})