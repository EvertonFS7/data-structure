## 🧠 Quando usar?

### 🇧🇷 Como saber qual estrutura ou abordagem usar?

Esta seção reúne comparações práticas para ajudar a escolher entre diferentes **estruturas de dados** ou **estratégias de implementação**, de acordo com o contexto do problema.

---

## 🔢 Array vs Linked List

### 🔸 Use um **Array** quando:
- Você precisa acessar elementos rapidamente por índice, como `array[5]`.  
  → Arrays oferecem **acesso direto em O(1)**.
- O número de elementos é conhecido ou muda pouco.
- A prioridade é **velocidade de leitura**, mais do que inserção ou remoção.
- A memória pode ser contínua e o tamanho fixo não é um problema.

📌 Exemplo: problemas de soma de subarrays, busca binária, matrizes, sliding window, etc.

### 🔹 Use uma **Linked List** quando:
- Você precisa fazer **muitas inserções e remoções no início ou meio da lista**.
- O tamanho muda constantemente e **não é fixo ou previsível**.
- O acesso direto por índice **não é essencial**.

📌 Exemplo: implementação de filas (queue), pilhas (stack), buffers dinâmicos, ou estruturas que sofrem alterações frequentes.

### ⚖️ Comparativo rápido:

| Situação                                | Array            | Linked List         |
|-----------------------------------------|------------------|---------------------|
| Acesso rápido por índice                | ✅ Sim           | ❌ Não              |
| Inserção/remoção no início ou meio      | ❌ Custo alto    | ✅ Muito eficiente   |
| Tamanho fixo ou previsível              | ✅ Sim           | ❌ Não ideal        |
| Estrutura que muda com frequência       | ❌ Pouco flexível| ✅ Muito flexível    |

---

## 🧠 When to use?

### 🇺🇸 How to know which structure or approach to use?

This section gathers practical comparisons to help you choose the right **data structure** or **implementation strategy** based on the problem context.

---

## 🔢 Array vs Linked List

### 🔸 Use an **Array** when:
- You need fast access to elements by index, like `array[5]`.  
  → Arrays provide **direct access in O(1)**.
- The number of elements is known or changes very little.
- Your priority is **fast reads**, not insertions/removals.
- Contiguous memory and fixed size are not a problem.

📌 Example: subarray sum problems, binary search, matrices, sliding window, etc.

### 🔹 Use a **Linked List** when:
- You need to do **many insertions or deletions at the beginning or middle**.
- The list size changes a lot and is **unpredictable**.
- Direct index access is **not critical**.

📌 Example: implementing queues, stacks, dynamic buffers, or frequently changing structures.

### ⚖️ Quick Comparison:

| Situation                               | Array            | Linked List         |
|----------------------------------------|------------------|---------------------|
| Fast access by index                   | ✅ Yes           | ❌ No               |
| Insert/delete at beginning/middle      | ❌ High cost     | ✅ Very efficient    |
| Fixed or predictable size              | ✅ Yes           | ❌ Not ideal        |
| Frequently changing structure          | ❌ Less flexible | ✅ Very flexible     |
