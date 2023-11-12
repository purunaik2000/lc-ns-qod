/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    if (source === target) return 0;

    let maxStop = -1;
    for (const route of routes) {
        maxStop = Math.max(maxStop, ...route);
    }

    if (maxStop < target) return -1;

    const n = routes.length;
    const minBusesToReach = Array(maxStop + 1).fill(Number.MAX_SAFE_INTEGER);
    minBusesToReach[source] = 0;

    let flag;
    do {
        flag = false;
        for (const route of routes) {
            let mini = Number.MAX_SAFE_INTEGER;
            for (const stop of route) {
                mini = Math.min(mini, minBusesToReach[stop]);
            }
            mini++;
            for (const stop of route) {
                if (minBusesToReach[stop] > mini) {
                    minBusesToReach[stop] = mini;
                    flag = true;
                }
            }
        }
    } while(flag);

    return (minBusesToReach[target] < Number.MAX_SAFE_INTEGER) ? minBusesToReach[target] : -1;
};