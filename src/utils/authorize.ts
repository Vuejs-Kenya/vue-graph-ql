export function isAuthorized(): boolean {
    if (!window.localStorage.getItem('accessToken')) {
        return false
    }

    const lifeTime = JSON.parse(window.localStorage.getItem('accessToken') || "").lifetime * 1000;
    const nowTime = new Date().getTime();
    return nowTime <= lifeTime;
}