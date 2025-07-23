import heapq

def dijkstra(graph, start):
    min_heap = [(0, start)]
    distances = {node: float("inf") for node in graph}
    distances[start] = 0

    while min_heap:  # Enquanto houver nós para processar
        current_distance, current_node = heapq.heappop(min_heap)  # Pega nó com menor distância
        if current_distance > distances[current_node]:  # Se já achou caminho melhor
            continue  # Pula esta iteração

        for neighbor, weight in graph[current_node].items():  # Para cada vizinho do nó atual
            distance = current_distance + weight  # Calcula nova distância total
            if distance < distances[neighbor]:  # Se encontrou caminho mais curto
                distances[neighbor] = distance  # Atualiza melhor distância
                heapq.heappush(min_heap, (distance, neighbor))  # Adiciona vizinho na fila

    return distances  # Retorna todas as menores distâncias


graph = {
    "A": {"B": 1, "C": 4},
    "B": {"A": 1, "C": 2, "D": 5},
    "C": {"A": 4, "B": 2, "D": 1},
    "D": {"B": 5, "C": 1},
}

start_node = "A"
distances = dijkstra(graph, start_node)
print(f"Distances from {start_node}: {distances}")