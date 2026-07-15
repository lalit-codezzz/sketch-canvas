async function getDashboard(request, response) {
    return response.json({
        userId: `------${request.userId}------`,
    });
}
export { getDashboard };
