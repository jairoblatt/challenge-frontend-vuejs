
import * as types from '../mutation-types'
import Tv from '@/service/api/tv'

export const state = () => ({
    search: [],
})

export const getters = {
    list: state => state.search,
}
export const mutations = {
    [types.INIT_TV](state, payload) {
        return state.search = payload
    },
    [types.TV](state, payload) {
        return state.search.push(payload)
    }
}
export const actions = {
    //Resquest for get media info
    async search({ commit, state }, id) {
        try {
            state.search = ''
            const { data } = await Tv.get(id);
            if (data) {
                commit(types.INIT_TV, data)
            }
            return;

        } catch (e) {
            console.log(e)
        }
    },
    async paginate({ commit }, id) {
        //Pagination here
        try {
            const { data } = await Tv.get(id);
            if (data) {
                data.forEach(tv => {
                    commit(types.TV, tv)
                });
            }
            return;
        } catch (e) {
            console.log(e)
        }
    }
}
