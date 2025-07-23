function networkDelayTime(times, n, k) {
    const graph = {};
    for (const [u, v, w] of times) {
        if (!graph[u]) graph[u] = [];
        graph[u].push([v, w]);
    }
    
    const dist = Array(n + 1).fill(Infinity);
    dist[k] = 0;
    const visited = Array(n + 1).fill(false);
    
    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let v = 1; v <= n; v++) {
            if (!visited[v] && (u === -1 || dist[v] < dist[u])) {
                u = v;
            }
        }
        
        if (dist[u] === Infinity) break; 
        
        visited[u] = true;
        
        if (graph[u]) {
            for (const [v, w] of graph[u]) {
                dist[v] = Math.min(dist[v], dist[u] + w);
            }
        }
    }
    
    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1;
        maxTime = Math.max(maxTime, dist[i]);
    }
    
    return maxTime;
}

const times = [[2,1,1],[2,3,1],[3,4,1]];
const n = 4;
const k = 2;
console.log(`Network delay time: ${networkDelayTime(times, n, k)}`);