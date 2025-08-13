# 🏗️ Heap

## O que é?

Um **heap** é uma **estrutura de dados em árvore binária** usada para organizar elementos por **prioridade**.  

**Tipos de heap:**
- **Min-heap:** o **menor valor** fica na raiz.  
- **Max-heap:** o **maior valor** fica na raiz.

---

## Representação em vetor (array)

Um heap é geralmente implementado como **array**, e a posição de cada nó segue estas fórmulas (índice começando em 0):  

- **Filho esquerdo:** `2 * i + 1`  
- **Filho direito:** `2 * i + 2`  
- **Pai:** `(i - 1) / 2` (divisão inteira)  

**Exemplo de Min-Heap:**

Array: `[2, 5, 8, 10, 7]`  

Árvore:

       2
      / \
     5   8
    / \
   10  7

---

## Operações principais

1. **Inserir (heapify up / subir):**  
   - Adiciona o novo elemento no final.  
   - Compara com o pai e sobe se for prioridade maior (ou menor no min-heap).  

2. **Remover raiz (heapify down / descer):**  
   - Remove o elemento da raiz.  
   - Coloca o último elemento na raiz.  
   - Compara com os filhos e desce se necessário, mantendo a ordem de prioridade.  

---

## Aplicações

- **Filas de prioridade:** processar o elemento mais importante primeiro.  
- **Algoritmos de busca:** como Dijkstra e A*.  
- **Heap Sort:** algoritmo de ordenação eficiente.


# 🏗️ Heap 

## 🇺🇸 What is it?

A **heap** is a **binary tree data structure** used to organize elements by **priority**.  

**Types of heap:**
- **Min-heap:** the **smallest value** is at the root.  
- **Max-heap:** the **largest value** is at the root.

---

## Array Representation

A heap is usually implemented as an **array**, and the position of each node follows these formulas (index starting at 0):  

- **Left child:** `2 * i + 1`  
- **Right child:** `2 * i + 2`  
- **Parent:** `(i - 1) / 2` (integer division)  

**Example of Min-Heap:**

Array: `[2, 5, 8, 10, 7]`  

Tree:

       2
      / \
     5   8
    / \
   10  7

---

## Main Operations

1. **Insert (heapify up / bubble up):**  
   - Add the new element at the end.  
   - Compare with the parent and move up if it has higher priority (or smaller in a min-heap).  

2. **Remove root (heapify down / bubble down):**  
   - Remove the element at the root.  
   - Place the last element at the root.  
   - Compare with the children and move down if necessary, maintaining the priority order.  

---

## Applications

- **Priority queues:** process the most important element first.  
- **Search algorithms:** like Dijkstra and A*.  
- **Heap Sort:** an efficient sorting algorithm.
