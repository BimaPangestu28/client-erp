/* eslint-disable */

const consola = require('consola');

export const state = () => ({
    user: []
})

export const mutations = {

}

export const actions = {
    async login({
        commit
    }, data) {
        try {
            this.$toast.show('Loading...', {
                icon: 'check'
            })

            const user = await this.$axios.post('/authentication/login', data);
            this.$toast.success('Log in success! Welcome back')

            this.$router.push('/');
        } catch (error) {
            this.$toast.error(error.response.data.message || error.response.data)
            consola.error(error.response.data.message);
        }
    }
}