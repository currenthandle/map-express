export function toggleTrajectory(session, device, data) {
    return {
        type: 'TOGGLE_TRAJECTORY',
        payload: { session, device, data }
    }
}

