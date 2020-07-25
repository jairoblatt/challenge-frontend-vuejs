import HTTPclient from '@/service/axios'

export default {
    get(id) {
        return HTTPclient(`/media/tv/search/${id}`);
    }
}