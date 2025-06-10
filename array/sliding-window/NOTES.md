## 📏 Sliding Window

### 🇧🇷 O que é?

**Sliding Window** (ou janela deslizante) é uma técnica usada para resolver problemas com listas, strings ou arrays de forma eficiente, especialmente quando você quer analisar **subconjuntos contínuos** de elementos — como somas, médias, contagens ou máximos.

A ideia é criar uma "janela" com tamanho fixo ou variável que percorre os dados passo a passo, **sem repetir cálculos desnecessários**.  
Em vez de recalcular tudo do zero a cada novo grupo, a técnica ajusta os valores com base no que **entrou** e no que **saiu** da janela.

É ideal para problemas de performance onde precisamos trabalhar com partes da estrutura sem usar loops aninhados.

Sua complexidade costuma ser **O(n)**, ou seja, **linear**, porque percorre a lista apenas uma vez de forma otimizada.

---

### 🇺🇸 What is it?

**Sliding Window** is a technique used to efficiently solve problems with lists, strings, or arrays — especially when you're analyzing **continuous subsets** of elements, like sums, averages, counts, or maximums.

The idea is to create a window (fixed or variable size) that slides across the data step by step, **avoiding unnecessary recalculations**.  
Instead of starting from scratch each time, it updates the result based on what **enters** and what **leaves** the window.

It's ideal for performance-critical problems where you need to work with parts of a structure without using nested loops.

Its time complexity is typically **O(n)**, meaning **linear**, because it goes through the list only once in an optimized way.
