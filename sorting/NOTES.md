### 🔄 Bubble Sort 

### 🇧🇷 O que é?

Bubble Sort é um algoritmo simples de ordenação. Ele percorre a lista várias vezes, comparando dois elementos vizinhos e trocando de lugar se estiverem na ordem errada. A cada passada, o maior valor “sobe” para o final da lista, como uma bolha. Isso se repete até que a lista esteja toda em ordem.

- **Melhor caso (lista já ordenada):** O(n)  
- **Pior caso (lista invertida):** O(n²)

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

---

### 🧩 Merge Sort

### 🇧🇷 O que é?

Merge Sort é um algoritmo de ordenação que também segue a estratégia de **“dividir para conquistar”**. Ele divide a lista ao meio **até chegar em listas de um único elemento**, e então **reconstrói a lista ordenada juntando (merging)** essas partes menores de forma ordenada. É muito eficiente e **estável**, ideal quando a ordenação precisa manter a posição relativa de elementos iguais.

- **Melhor caso:** O(n log n)  
- **Pior caso:** O(n log n)  
- **Espaço:** O(n), porque usa espaço extra para as sublistas

👣 **Passo a passo simples:**
1. Divide a lista em duas metades.
2. Aplica o Merge Sort recursivamente em cada metade.
3. Junta (merge) as duas metades já ordenadas em uma nova lista, comparando os elementos um a um.

🔁 **Pense assim:** Ele **quebra tudo até virar pó (listas de 1 item)**, e depois **reconstrói tudo na ordem certa**.

### 🇺🇸 What is it?

Merge Sort is a sorting algorithm that also follows the **divide-and-conquer** strategy. It splits the list into halves until it reaches single-element lists, and then **merges those sorted sublists** into a fully sorted array. It’s very efficient and **stable**, meaning it preserves the original order of equal elements.

- **Best case:** O(n log n)  
- **Worst case:** O(n log n)  
- **Space:** O(n), due to extra space used during merging

👣 **Simple steps:**
1. Split the list into halves.
2. Recursively apply Merge Sort to each half.
3. Merge the sorted halves into one sorted list by comparing elements one by one.

🔁 **Think of it like this:** It **breaks everything into dust (1-item lists)**, then **rebuilds it in perfect order**.
