class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_to_front(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

    def add_to_end(self, value):
        new_node = Node(value)
        if not self.tail:
            self.head = self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node

    def remove_from_front(self):
        if not self.head:
            return None
        removed_value = self.head.value
        if self.head == self.tail:
            self.head = self.tail = None
        else:
            self.head = self.head.next
            self.head.prev = None
        return removed_value

    def remove_from_end(self):
        if not self.tail:
            return None
        removed_value = self.tail.value
        if self.head == self.tail:
            self.head = self.tail = None
        else:
            self.tail = self.tail.prev
            self.tail.next = None
        return removed_value
    
# Criar a lista duplamente encadeada
dll = DoublyLinkedList()

# Teste 1: remover da frente e do fim em lista vazia
print(dll.remove_from_front())  # Saída: None (lista está vazia)
print(dll.remove_from_end())    # Saída: None (lista está vazia)

# Teste 2: adicionar um elemento na frente
dll.add_to_front(100)
print(dll.head.value)  # Saída: 100 (único elemento)
print(dll.tail.value)  # Saída: 100 (único elemento)

# Teste 3: adicionar um elemento no fim
dll.add_to_end(200)
print(dll.head.value)  # Saída: 100 (continua cabeça)
print(dll.tail.value)  # Saída: 200 (novo elemento no fim)

# Teste 4: adicionar outro elemento na frente
dll.add_to_front(50)
print(dll.head.value)  # Saída: 50 (novo elemento na frente)
print(dll.tail.value)  # Saída: 200 (fim permanece)

# Teste 5: remover do front
removido = dll.remove_from_front()
print(removido)        # Saída: 50 (elemento removido da frente)
print(dll.head.value)  # Saída: 100 (novo elemento da frente)
print(dll.tail.value)  # Saída: 200

# Teste 6: remover do fim
removido = dll.remove_from_end()
print(removido)        # Saída: 200 (elemento removido do fim)
print(dll.head.value)  # Saída: 100 (único elemento restante)
print(dll.tail.value)  # Saída: 100

# Teste 7: remover até a lista ficar vazia
removido = dll.remove_from_front()
print(removido)        # Saída: 100 (último elemento removido)
print(dll.head)        # Saída: None (lista vazia)
print(dll.tail)        # Saída: None (lista vazia)

# Teste 8: adicionar vários elementos no fim e remover todos
dll.add_to_end(1)
dll.add_to_end(2)
dll.add_to_end(3)
print(dll.head.value)  # Saída: 1 (primeiro elemento)
print(dll.tail.value)  # Saída: 3 (último elemento)

print(dll.remove_from_front())  # Saída: 1
print(dll.remove_from_end())    # Saída: 3
print(dll.remove_from_front())  # Saída: 2

print(dll.head)  # Saída: None (lista vazia)
print(dll.tail)  # Saída: None (lista vazia)