### 🔄 Bubble Sort 

### 🇧🇷 O que é?

Bubble Sort é um algoritmo simples de ordenação. Ele percorre a lista várias vezes, comparando dois elementos vizinhos e trocando de lugar se estiverem na ordem errada. A cada passada, o maior valor “sobe” para o final da lista, como uma bolha. Isso se repete até que a lista esteja toda em ordem.

- **Melhor caso (lista já ordenada):** O(n)  
- **Pior caso (lista invertida):** O(n²)

---

### 🇺🇸 What is it?

Bubble Sort is a straightforward sorting algorithm that works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. With each iteration, the largest unsorted element "bubbles up" to its correct position at the end of the list. This process is repeated until the entire list is sorted.

- **Best case (already sorted):** O(n)  
- **Worst case (reversed list):** O(n²)
  
---

### ⚡ Quick Sort

### 🇧🇷 O que é?
Quick Sort é um algoritmo eficiente de ordenação que segue a estratégia de “dividir para conquistar”. Ele escolhe um elemento pivô, separa os menores à esquerda e os maiores à direita, e aplica o mesmo processo recursivamente em cada metade. Ao final, junta tudo para formar a lista ordenada. É rápido, funciona in-place e tem bom desempenho na maioria dos casos.

- **Melhor caso (boa divisão do pivô):** O(n log n)

- **Pior caso (lista já ordenada ou escolha ruim do pivô):** O(n²)

- **Espaço (recursão):** O(log n), eficiente por ser in-place

### 🇺🇸 What is it?

Quick Sort is a fast and efficient sorting algorithm based on the divide-and-conquer principle. It selects a pivot, partitions the array into elements smaller than the pivot and greater than the pivot, and recursively applies the same process to each part. Finally, it merges the sorted parts into one. It's fast, in-place, and performs well in most scenarios.

- **Best case (good pivot division):** O(n log n)

- **Worst case (already sorted or poor pivot choice):** O(n²)

- **Space (recursion):** O(log n), efficient due to in-place sorting
