## 🌳 Binary Tree

### 🇧🇷 O que é?

Uma **árvore binária** é uma estrutura de dados hierárquica onde cada nó tem no máximo dois filhos, chamados de **esquerdo (left)** e **direito (right)**.  
É amplamente usada em algoritmos, estruturas de dados e sistemas de busca e ordenação.

Exemplo visual simples:

     10
    /  \
   5    15
  / \   /  \
 3   7 12   18

### 🇧🇷 Percursos (Traversals)

As formas mais comuns de percorrer uma árvore binária são:

#### **1. Pré-ordem (Preorder)**: Visita o nó → Esquerda → Direita

**Percurso:**
- Visita o nó **10**
- Vai para o filho esquerdo **5**
- Vai para o filho esquerdo de 5, **3**
- Volta e vai para o filho direito de 5, **7**
- Vai para o filho direito **15**
- Vai para o filho esquerdo de 15, **12**
- Vai para o filho direito de 15, **18**

**Resultado:** **10 → 5 → 3 → 7 → 15 → 12 → 18**

---

#### **2. Em ordem (Inorder)**: Esquerda → Visita o nó → Direita

**Percurso:**
- Vai para o filho esquerdo de 10, **5**
- Vai para o filho esquerdo de 5, **3**
- Volta e visita **5**
- Vai para o filho direito de 5, **7**
- Volta e visita **10**
- Vai para o filho esquerdo de 15, **12**
- Volta e visita **15**
- Vai para o filho direito de 15, **18**

**Resultado:** **3 → 5 → 7 → 10 → 12 → 15 → 18**

---

#### **3. Pós-ordem (Postorder)**: Esquerda → Direita → Visita o nó

**Percurso:**
- Vai para o filho esquerdo de 10, **5**
- Vai para o filho esquerdo de 5, **3**
- Volta e vai para o filho direito de 5, **7**
- Volta e visita **5**
- Vai para o filho direito de 10, **15**
- Vai para o filho esquerdo de 15, **12**
- Vai para o filho direito de 15, **18**
- Volta e visita **15**
- Volta e visita **10**

**Resultado:** **3 → 7 → 5 → 12 → 18 → 15 → 10**

---

#### **4. Em largura (Level-order)**: Visita nível por nível (BFS)

**Percurso:**
- Visita o nó **10**
- Vai para o nível 2 e visita **5** e **15**
- Vai para o nível 3 e visita **3**, **7**, **12** e **18**

**Resultado:** **10 → 5 → 15 → 3 → 7 → 12 → 18**

---

#### **DFS (Busca em Profundidade)**: Exploração exaustiva de caminhos antes de retroceder

**Descrição:**
A Busca em Profundidade (DFS) pode ser comparada ao trabalho de um explorador em uma floresta densa. A jornada começa na raiz da árvore, onde o explorador escolhe um caminho e segue por ele até alcançar o ponto mais profundo possível, sem desviar. Ao atingir um nó sem opções de continuidade, o explorador retorna ao último ponto de decisão e escolhe o próximo caminho disponível. Este processo é repetido até que todos os caminhos tenham sido completamente explorados, garantindo uma análise detalhada de cada ramificação antes de avançar para a próxima.

**Percurso:**
- A exploração inicia-se no ponto de origem da floresta, o nó **10**.
- O explorador segue para o ramo esquerdo e chega ao nó **5**.
- Avança até o ponto final da ramificação esquerda, o nó **3**.
- Ao não haver mais opções, retorna para o nó **5** e segue para a ramificação direita, chegando ao nó **7**.
- Após concluir esse caminho, retorna até o nó raiz **10** e explora a ramificação direita, indo até o nó **15**.
- De **15**, explora os filhos **12** e **18**.

**Resultado:** **10 → 5 → 3 → 7 → 15 → 12 → 18**

Essa abordagem garante que todos os caminhos, até os mais profundos, sejam completamente investigados, permitindo uma exploração exaustiva de todos os ramos antes de passar para o próximo.

---

## **BFS (Busca em Largura)**: Exploração por níveis antes de aprofundar

### Descrição:
A Busca em Largura (BFS) pode ser comparada ao trabalho de um vigilante patrulhando uma floresta por camadas. Ele começa na raiz da árvore e inspeciona todos os pontos ao seu redor no mesmo nível antes de avançar para o próximo. Em vez de se aprofundar em um caminho só, ele percorre todos os caminhos disponíveis na mesma profundidade, garantindo uma análise completa por etapas. Essa abordagem é ideal quando se deseja encontrar o caminho mais curto ou entender a estrutura geral antes de mergulhar nos detalhes.

### Percurso:
- A patrulha começa no ponto central da floresta, o nó **10**.
- Antes de ir mais fundo, o vigilante observa os caminhos laterais imediatos: os nós **5** e **15**.
- Em seguida, visita os filhos desses nós: **3** e **7** (filhos de 5), depois **12** e **18** (filhos de 15).
- A ordem segue o avanço por níveis, sempre da esquerda para a direita, respeitando a camada atual antes de prosseguir.

### Resultado:
**10 → 5 → 15 → 3 → 7 → 12 → 18**

Essa abordagem assegura que todos os nós em uma determinada profundidade sejam explorados antes de passar para a camada seguinte, oferecendo uma visão panorâmica e estruturada da árvore.