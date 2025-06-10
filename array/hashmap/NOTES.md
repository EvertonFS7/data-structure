## 🗂️ HashMap

### 🇧🇷 O que é?

Uma **HashMap** é como uma gaveta mágica onde você guarda informações usando uma "etiqueta" (chave) para encontrar o que precisa de forma quase instantânea.  
Em vez de procurar item por item numa lista, a HashMap usa uma **função hash**, que transforma a chave em um número (um índice), e esse número diz exatamente **onde o valor vai ficar guardado**.

Por exemplo: se você quiser guardar o número de telefone de uma pessoa usando o nome dela como chave, a função hash transforma esse nome em um número, e você coloca o telefone nesse lugar da memória.  
Depois, se quiser o telefone de volta, é só usar o mesmo nome: a função hash calcula novamente o índice, e você vai direto no valor — sem precisar procurar.

O tempo de acesso em média é **O(1)** — ou seja, **constante**, super rápido.  
Mas se duas chaves gerarem o mesmo índice (isso é chamado de *colisão*), o desempenho pode cair um pouco, dependendo de como essas colisões são tratadas.

---

### 🇺🇸 What is it?

A **HashMap** is like a magic drawer where you store information using a "label" (key) to quickly find what you need.  
Instead of checking each item in a list, the HashMap uses a **hash function**, which turns the key into a number (an index), and that number tells exactly **where the value will be stored**.

For example: if you want to store someone’s phone number using their name as the key, the hash function turns that name into a number, and you save the phone number at that spot in memory.  
Later, if you want the phone number back, just use the same name: the hash function calculates the same index, and you go straight to the value — no searching needed.

The average access time is **O(1)** — which means **constant time**, very fast.  
However, if two keys generate the same index (this is called a *collision*), performance may drop slightly depending on how collisions are handled.
