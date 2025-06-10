## 🔍 Binary Search

### 🇧🇷 O que é?

**Binary search** (ou busca binária) é uma forma rápida de encontrar um valor dentro de uma lista que **já está ordenada**.  
Em vez de verificar item por item como na busca tradicional, a busca binária divide a lista ao meio a cada passo.  
Ela compara o valor do meio com o valor que você está procurando.  
- Se for igual, encontrou.  
- Se for menor, repete a busca na metade da direita.  
- Se for maior, repete na metade da esquerda.

Esse processo de cortar a busca pela metade continua até achar o valor ou até não sobrar mais nada pra procurar.  
Por isso, a busca binária é muito rápida — ela **elimina metade dos elementos a cada passo**.

A complexidade dela é **O(log₂ n)**, porque você divide a lista por dois várias vezes até chegar a um único elemento.  
Por exemplo, numa lista com mil itens, são necessários no máximo cerca de **10 passos** para encontrar um valor.

---

### 🇺🇸 What is it?

**Binary search** is a fast way to find a value in a list that is **already sorted**.  
Instead of checking item by item like in a normal search, binary search splits the list in half at each step.  
It compares the middle value with the value you're looking for.  
- If it's equal, you're done.  
- If it's smaller, search the right half.  
- If it's larger, search the left half.

This process of cutting the search space in half continues until the value is found or nothing is left to search.  
That’s why binary search is very fast — it **eliminates half of the elements with each step**.

Its time complexity is **O(log₂ n)** because you're dividing the list by two repeatedly until you're left with one element.  
For example, in a list with one thousand items, you need at most about **10 steps** to find a value.
