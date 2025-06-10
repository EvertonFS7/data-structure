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
    
dll = DoublyLinkedList()

print(dll.remove_from_front())  
print(dll.remove_from_end())    

dll.add_to_front(100)
print(dll.head.value) 
print(dll.tail.value) 

dll.add_to_end(200)
print(dll.head.value) 
print(dll.tail.value) 

dll.add_to_front(50)
print(dll.head.value)  
print(dll.tail.value)  

removido = dll.remove_from_front()
print(removido)        
print(dll.head.value)  
print(dll.tail.value)  

removido = dll.remove_from_end()
print(removido)        
print(dll.head.value)  
print(dll.tail.value)  

removido = dll.remove_from_front()
print(removido)        
print(dll.head)        
print(dll.tail)        

dll.add_to_end(1)
dll.add_to_end(2)
dll.add_to_end(3)
print(dll.head.value)  
print(dll.tail.value)  

print(dll.remove_from_front())  
print(dll.remove_from_end())    
print(dll.remove_from_front())  

print(dll.head)  
print(dll.tail)  