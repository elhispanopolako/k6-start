import http from 'k6/http';

const username = 'user';
const password = 'passwd';

export default function () {
    const credentials = `${username}:${password}`;
    const res = http.get(`http://${credentials}@example.com/`, { auth: 'ntlm' });
}