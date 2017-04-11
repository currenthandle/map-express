export function createSession(user) {
    return {
        type: 'CREATE_SESSION',
        payload: user
    }
}
