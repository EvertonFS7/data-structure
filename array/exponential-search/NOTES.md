## 🚀 Exponential Search

### 🇧🇷 O que é?

**Exponential Search** (ou busca exponencial) é uma técnica usada para **encontrar rapidamente a faixa onde está o valor** dentro de uma lista ordenada, e depois aplicar uma **busca binária** dentro dessa faixa.

Funciona assim: começamos verificando o primeiro elemento. Depois, pulamos para os índices 1, 2, 4, 8, 16... dobrando a posição a cada passo.  
Quando encontramos um valor maior que o que estamos procurando (ou chegamos ao fim da lista), paramos.  
Com isso, identificamos um intervalo onde o valor pode estar — e aplicamos uma **busca binária** só dentro desse intervalo.

É ideal para **listas ordenadas muito grandes** ou quando **você não sabe o tamanho exato da lista**, como em streams ou estruturas infinitas.

A complexidade no pior caso é **O(log i)**, onde `i` é a posição do valor procurado.  
Ou seja, continua sendo muito rápida, combinando **crescimento exponencial com eficiência logarítmica**.

---

### 🇺🇸 What is it?

**Exponential Search** is a technique used to **quickly find the range** where a value might be in a sorted list, and then apply **binary search** within that range.

Here’s how it works: you check the first element, then jump to index 1, then 2, then 4, 8, 16... doubling the index at each step.  
Once you find a value greater than the one you're looking for (or reach the end of the list), you stop.  
Now you know the range where the value might be — and you apply **binary search** only within that segment.

It’s ideal for **very large sorted lists**, or when **you don’t know the exact size of the list**, such as in streams or infinite structures.

Its worst-case time complexity is **O(log i)**, where `i` is the position of the target value.  
That means it’s still very fast, combining **exponential growth with logarithmic efficiency**.
