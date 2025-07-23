function dijkstra(graph, start) {
  const distances = {}; // Armazena distâncias
  const visited = new Set(); // Nós já visitados
  
  // Inicializa todas distâncias como infinito
  for (const node in graph) {
      distances[node] = Infinity;
  }
  distances[start] = 0; // Distância inicial é 0
  
  while (visited.size < Object.keys(graph).length) { // Enquanto não visitou todos
      // Encontra nó não visitado com menor distância
      let currentNode = null;
      let minDistance = Infinity;
      
      for (const node in distances) { // Procura menor distância
          if (!visited.has(node) && distances[node] < minDistance) {
              minDistance = distances[node];
              currentNode = node;
          }
      }
      
      if (!currentNode) break; // Se não achou nó válido, para
      
      visited.add(currentNode); // Marca como visitado
      
      // Atualiza distâncias dos vizinhos
      for (const neighbor in graph[currentNode]) {
          if (!visited.has(neighbor)) { // Se vizinho não foi visitado
              const newDistance = distances[currentNode] + graph[currentNode][neighbor];
              if (newDistance < distances[neighbor]) { // Se achou caminho melhor
                  distances[neighbor] = newDistance; // Atualiza distância
              }
          }
      }
  }
  
  return distances; // Retorna resultado
}

// Grafo de exemplo
const graph = {
  "A": {"B": 1, "C": 4},
  "B": {"A": 1, "C": 2, "D": 5},
  "C": {"A": 4, "B": 2, "D": 1},
  "D": {"B": 5, "C": 1}
};

// Executa e mostra resultado
const result = dijkstra(graph, "A");
console.log("Distances from A:", result);