import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    vus: 10,
    duration: '30s',
}
export default function () {
    const res = http.get('https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=x0nDVUoCti67tMylkHmBRkUcXA44gfBt')
    sleep(1);
    check(res, { 'status is 200': (r) => r.status = 200 })
}