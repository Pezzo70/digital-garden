---
title: Symbol Tables Implementation
date: 2025-08-20
tags:
  - DSA
  - data-structures
  - algorithms
  - note
draft: false
---

A **Symbol Table** is a data structure that associates keys (symbols) with values. It's fundamental in compilers, interpreters, and many other applications where you need to store and retrieve information efficiently.

## Core Operations

- **Insert**: Add a key-value pair
- **Search/Get**: Retrieve the value associated with a key
- **Delete**: Remove a key-value pair
- **Contains**: Check if a key exists

## Implementation Options

### 1. Unordered Array
```python
class SymbolTable:
    def __init__(self):
        self.keys = []
        self.values = []
    
    def put(self, key, value):
        for i, k in enumerate(self.keys):
            if k == key:
                self.values[i] = value
                return
        self.keys.append(key)
        self.values.append(value)
    
    def get(self, key):
        for i, k in enumerate(self.keys):
            if k == key:
                return self.values[i]
        return None
```

**Time Complexity**: O(n) for all operations

### 2. Ordered Array (Binary Search)
```python
def binary_search(arr, key):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] < key:
            lo = mid + 1
        elif arr[mid] > key:
            hi = mid - 1
        else:
            return mid
    return -1
```

**Time Complexity**: O(log n) for search, O(n) for insert/delete

### 3. Binary Search Tree
```python
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def put(self, key, value):
        self.root = self._put(self.root, key, value)
    
    def _put(self, node, key, value):
        if node is None:
            return Node(key, value)
        if key < node.key:
            node.left = self._put(node.left, key, value)
        elif key > node.key:
            node.right = self._put(node.right, key, value)
        else:
            node.value = value
        return node
```

**Time Complexity**: O(log n) average, O(n) worst case

### 4. Hash Table
```python
class HashTable:
    def __init__(self, size=100):
        self.size = size
        self.table = [[] for _ in range(size)]
    
    def _hash(self, key):
        return hash(key) % self.size
    
    def put(self, key, value):
        index = self._hash(key)
        for item in self.table[index]:
            if item[0] == key:
                item[1] = value
                return
        self.table[index].append([key, value])
    
    def get(self, key):
        index = self._hash(key)
        for item in self.table[index]:
            if item[0] == key:
                return item[1]
        return None
```

**Time Complexity**: O(1) average, O(n) worst case

## Applications

### 1. Compilers
- **Variable scope**: Track variables in different scopes
- **Function definitions**: Store function signatures
- **Type checking**: Associate variables with their types

### 2. Databases
- **Indexing**: Create indexes for fast lookups
- **Metadata**: Store table and column information

### 3. Configuration Systems
- **Environment variables**: Store application settings
- **User preferences**: Save user-specific settings

## Advanced Symbol Tables

### 1. Red-Black Trees
Self-balancing binary search trees that guarantee O(log n) performance.

### 2. B-Trees
Tree data structures optimized for systems that read and write large blocks of data.

### 3. [[trie-data-structure]] (Prefix Trees)
Efficient for string keys and prefix-based operations.

## Related Concepts

- [[binary-tree-fundamentals]] - Fundamental tree structure
- [[trie-data-structure]] - Specialized tree for string operations
- Hash Tables - Fast key-value storage
- Binary Search - Efficient search algorithm

## References

- [Symbol Tables - Princeton Algorithms](https://algs4.cs.princeton.edu/31elementary/)
- [Introduction to Symbol Tables](https://www.geeksforgeeks.org/symbol-table-compiler/)
