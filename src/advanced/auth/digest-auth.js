import http from 'k6/http';
import { check } from 'k6';

const username = 'user';
const password = 'passwd';

export default function () {
    const credentials = `${username}:${password}`;
    const res = http.get(
        `http://${credentials}@httpbin.test.k6.io/digest-auth/auth/${username}/${password}`,
        { auth: 'digest' }
    );

    check(res, {
        'status is 200': (r) => r.status === 200,
        'is authenticated': (r) => r.json().authenticated === true,
        'is correct user': (r) => r.json().user === username,
    });
}