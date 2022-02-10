export const getTime = () => {
    return {
        fyh: new Date().toDateString(),
        timestamp: Date.now()
    }
}