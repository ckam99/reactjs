import api from "./base";

class Post {
    async getAll() {
        try {
            const response = await api.get('/posts');
            return api.format(response);
        } catch (error) {
            return api.format(error.response, true);
        }
    }
    async find(id) {
        try {
            const response = await api.get(`/posts/${id}`);
            return api.format(response);
        } catch (error) {
            return api.format(error.response, true);
        }
    }
}

export default new Post();
