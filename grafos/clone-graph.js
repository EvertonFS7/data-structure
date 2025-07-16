function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}


 function cloneGraph(node) {
   if (!node) return null; // Caso o nó de entrada seja nulo, retorna null (nada a clonar)

   const clones = new Map(); // Guardará os nós clonados: chave = valor original, valor = nó clonado

   const queue = [node]; // Fila para BFS (começamos pelo nó de entrada)

   // Criamos o primeiro clone e registramos
   clones.set(node.val, new Node(node.val));

   // Início da BFS
   while (queue.length > 0) {
     const curr = queue.shift(); // Remove o primeiro da fila
     const currClone = clones.get(curr.val); // Pegamos o clone desse nó atual

     // Percorremos todos os vizinhos do nó atual
     for (const neighbor of curr.neighbors) {
       // Se ainda não clonamos esse vizinho...
       if (!clones.has(neighbor.val)) {
         clones.set(neighbor.val, new Node(neighbor.val)); // ...clonamos ele
         queue.push(neighbor); // e colocamos na fila para visitar depois
       }

       // Agora ligamos o clone do vizinho ao clone atual
       currClone.neighbors.push(clones.get(neighbor.val));
     }
   }

   // Retornamos o clone do nó inicial
   return clones.get(node.val);
 }

// Criando manualmente o grafo com 4 nós
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// Definindo vizinhos conforme a matriz de adjacência fornecida
node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

// Agora sim, chamamos a função corretamente
const cloned = cloneGraph(node4);

// Teste simples (opcional)
console.log(cloned);
