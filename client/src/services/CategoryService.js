import Api from './ApiService';

export default {
    getCategory() {
        return Api().get('/category');
    },

    storeCategory(category) {
        return Api().post('/admin/category', category);
    },

    updateCategory(id, category) {
        return Api().put('/admin/category/' + id, category);
    }
}