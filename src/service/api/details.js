import HTTPclient from '@/service/axios'

export default {
    get({ type ,id }){
        return HTTPclient.get(`/media/${type}/${id}`);
    }
}