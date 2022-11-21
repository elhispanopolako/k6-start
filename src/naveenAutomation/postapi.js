
import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    vus: 1,
    duration: '5s',
}


export default function () {
    const url = 'https://dummyjson.com/auth/login'
    const body = JSON.stringify({
        username: 'atuny0',
        password: '9uQFF1Lh',
    })
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const res = http.post(url, body, params);

    check(res, {
        'status is 200': (r) => r.status == 200,
        'is res body has username': (r) => r.body.includes('atuny0')
    });
}


