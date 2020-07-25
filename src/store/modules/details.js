
import * as types from '../mutation-types'
import Details from '../../service/api/details'

export const state = () => ({
    selected:{ },
})

export const getters = {
    selected: state => state.selected
}
export const mutations = {

    [types.DETAILS](state, payload){
        return state.selected = payload
    }
}
export const actions = {
    
    //Resquest for get media info
    async search({commit}, payload){
        try{
            state.selected = ''
            const { data } = await Details.get(payload)
            data.type = payload.type
            commit(types.DETAILS, data)
        } catch(e){
            console.log(e) ;
        }
    }
}
