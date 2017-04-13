export function toggleSession(sessionId, activeSessions) {
    return {
        type: 'TOGGLE_SESSION',
        payload: sessionId
    }
}

