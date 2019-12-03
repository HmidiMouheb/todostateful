const updateTask = (i,n) => ({
    type:"UPDATE_TASK",
    name:n,
    payload:i
});

export default updateTask;
