// Helper function to enable syntax like `g(config, "card.padding", True)`.
export function g(obj, path, fallback) {
    for (path in path.split(".")) {
        if (path in obj) {
            obj = obj[path];
        } else {
            return fallback;
        }
    }
    return obj;
}