import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:48984/api';

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
    if (token) {
        req.set('Authorization', `Basic ${token}`);
    }
};

const requests = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
};

const Points = {
    all: () =>
        requests.get('/points'),
    recalculated: (r) =>
        requests.get(`/points/recalculate?r=${r}`),
    new: (x, y, r) =>
        requests.post('/points', {x: x, y: y, r: r})
};

const Auth = {
    login: (username, password) =>
        requests.post('/users/login', { username: username, password: password }),
    register: (username, password) =>
        requests.post('/users/register', { username: username, password: password } ),
    logout: () =>
        requests.post('/users/logout'),
};

export default {
    Points,
    Auth,
    setToken: _token => { token = _token; }
};
