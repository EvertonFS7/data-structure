## 🕸️ Grafo

### 🇧🇷 O que é?

Um **grafo** é uma estrutura usada para representar conexões entre coisas.

Imagine que você tem vários **pontos** (como cidades) e quer ligá-los com **linhas** (como estradas):

- Os **pontos** são chamados de **nós** ou **vértices**.
- As **linhas** que conectam esses pontos são chamadas de **arestas**.

---

### ✍️ Exemplo Visual:

```
  [A]-----[B]
   |       |
   |       |
  [C]-----[D]
```

- Aqui temos 4 **vértices**: A, B, C e D.
- As **arestas** conectam os vértices como se fossem caminhos entre cidades.

---

### 📌 Para que serve?

Grafos são usados para representar:
- Mapas de ruas ou rotas
- Redes sociais (pessoas conectadas)
- Internet (páginas ligadas por links)
- Fluxos de trabalho, circuitos, e muito mais.

## 🚦 Dijkstra

### 🇧🇷 O que é?

O **algoritmo de Dijkstra** 
é como se você quisesse ir de um lugar até os outros gastando o menor tempo possível. Você começa num ponto e diz: “aqui eu estou, o tempo é zero.”
Olha os caminhos ao redor e vê qual leva mais rápido. Vai pelo caminho mais
curto e marca quanto tempo levou. Repete isso, sempre escolhendo o menor caminho, até saber qual é o mais rápido
para todos os lugares. é uma forma de descobrir o caminho mais curto entre um ponto de partida e todos os outros
pontos de um mapa, grafo ou rede.

Ele é muito usado em GPS, jogos e redes de computadores para encontrar a rota mais rápida possível.

---

### 🇧🇷 Como funciona? (Explicação simples)

Imagine que você é um carteiro e precisa entregar cartas em várias casas o mais rápido possível.  
Você começa na sua casa e sempre escolhe o **caminho mais curto** até cada nova casa, anotando quanto tempo levou.

1. Começa com distância **0** até você mesmo, e infinito (∞) para os outros.
2. Olha os caminhos vizinhos e atualiza os menores valores.
3. Vai para o local com menor valor ainda não visitado.
4. Repete isso até visitar todos os pontos.

---

### 🔢 Exemplo Visual

Considere o seguinte grafo:

```
      [A]
     /   \
   1/     \4
   /       \
 [B]---2---[C]
   \       /
   5\     /1
     \   /
      [D]
```

**Objetivo:** Encontrar o menor caminho de A até todos os outros nós.

---

### 🧭 Passo a passo:

#### 📍 Início:
```
A: 0     (início)
B: ∞
C: ∞
D: ∞
```

#### 1️⃣ De A para os vizinhos:
- A → B = 1 → B agora é 1
- A → C = 4 → C agora é 4

```
A: 0 ✅
B: 1
C: 4
D: ∞
```

#### 2️⃣ Próximo menor: B (1)
- B → C = 2 → 1+2 = 3 → menor que 4, atualiza C
- B → D = 5 → 1+5 = 6 → D agora é 6

```
A: 0 ✅
B: 1 ✅
C: 3
D: 6
```

#### 3️⃣ Próximo menor: C (3)
- C → D = 1 → 3+1 = 4 → menor que 6, atualiza D

```
A: 0 ✅
B: 1 ✅
C: 3 ✅
D: 4
```

#### 4️⃣ Último: D (4) — fim!

---

### ✅ Resultado Final:
Menores distâncias a partir do ponto A:
- A → B = **1**
- A → C = **3**
- A → D = **4**

---

### 🧠 Resumo:
- Sempre vá para o nó com **menor valor conhecido**.
- Atualize os vizinhos se encontrar um caminho **mais curto**.
- Marque como "visitado" e continue até terminar.

---

### 💡 Aplicações
- Rotas de GPS
- Roteamento em redes
- Inteligência artificial (jogos)
- Planejamento logístico
