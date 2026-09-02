export function generateId(model) {
    return model.length > 0 ? Math.max(...model.map(item => item.id)) + 1 : 1;
}