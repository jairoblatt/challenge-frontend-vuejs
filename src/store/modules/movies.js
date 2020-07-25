import * as types from '../mutation-types'
import Movie from '@/service/api/movie'

export const state = () => ({
    search: [],
})

export const getters = {
    list: state => state.search,
}
export const mutations = {
    [types.INIT_MOVIES](state, payload) {
        return state.search = payload
    },
    [types.MOVIES](state, payload) {
        return state.search.push(payload)
    }
}
export const actions = {

    async search({ commit, state }, id) {
        try {
            state.search = ''
            const { data } = await Movie.get(id)
            if (data) {
                commit(types.INIT_MOVIES, data)
            }
            return;
        } catch (e) {
            console.log(e)
        }
    },

    async paginate({ commit }, payload) {
        try {
            const { data } = await Movie.get(payload)
            if (data) {
                data.forEach(movie => {
                    commit(types.MOVIES, movie)
                });
            }
            return;
        } catch (e) {
            console.log(e)
        }
    }
}
