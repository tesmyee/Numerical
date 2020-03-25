import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.99.100:8080/api',
})


export const getBisection = () => api.get('/bisections')
export const getNewton = () => api.get('/newton')
export const getOnepoint = () => api.get('/onepoint')
export const getSecant = () => api.get('/secant')
export const getTaylor = () => api.get('/taylor')
export const getSimson = () => api.get('/simson')
export const getComsimson = () => api.get('/comsimson')
export const getTrapzeidel = () => api.get('/trapzeidel')
export const getComtrap = () => api.get('/comtrap')
export const getBackward = () => api.get('/backward')
export const getForward = () => api.get('/forward')
export const getCentral = () => api.get('/central')

    const apis = {
        getBisection,
        getNewton,
        getOnepoint,
        getSecant,
        getTaylor,
        getSimson,
        getComsimson,
        getComtrap,
        getTrapzeidel,
        getBackward,
        getForward,
        getCentral
    }

export default apis