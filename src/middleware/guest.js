import store from '@/store'

export default (to, from, next) => {
    console.log('Passou pelo middleware publico')
    next()
}