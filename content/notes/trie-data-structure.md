---
title: Trie Data Structure
date: 2025-08-20
tags:
  - DSA
  - data-structures
  - algorithms
  - note
draft: false
---

An R-way Trie is a tree-like data structure, also known as a Prefix Tree or, more generically, a Digital Search Tree (DST)/Digital Tree. It is commonly used to implement string-based [[symbol-tables]] structures. 

It has a certain resemblance to a [[binary-tree]], but instead of having at most two children, each node can have multiple children (one for each character in the alphabet).

## Structure

![[TrieTree.png]]

A trie consists of:
- **Root node**: Empty node that serves as the starting point
- **Internal nodes**: Each node represents a character
- **Leaf nodes**: Mark the end of a word
- **Edges**: Represent characters

## Implementation

```python
class TrieNode:
    def __init__(self):
        self.children = {}  # Dictionary to store child nodes
        self.is_end_of_word = False  # Flag to mark end of word

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word
    
    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True
```

## Operations

### Insertion
Time Complexity: O(m) where m is the length of the word

```python
def insert(self, word):
    node = self.root
    for char in word:
        if char not in node.children:
            node.children[char] = TrieNode()
        node = node.children[char]
    node.is_end_of_word = True
```

### Search
Time Complexity: O(m) where m is the length of the word

```python
def search(self, word):
    node = self.root
    for char in word:
        if char not in node.children:
            return False
        node = node.children[char]
    return node.is_end_of_word
```

### Deletion
Time Complexity: O(m) where m is the length of the word

```python
def delete(self, word):
    def _delete_helper(node, word, index):
        if index == len(word):
            if not node.is_end_of_word:
                return False
            node.is_end_of_word = False
            return len(node.children) == 0
        
        char = word[index]
        if char not in node.children:
            return False
        
        should_delete_child = _delete_helper(node.children[char], word, index + 1)
        
        if should_delete_child:
            del node.children[char]
            return len(node.children) == 0
        
        return False
    
    _delete_helper(self.root, word, 0)
```

## Applications

1. **Autocomplete**: Suggest words as user types
2. **Spell Checker**: Check if words exist in dictionary
3. **IP Routing**: Longest prefix matching
4. **Text Analysis**: Word frequency and pattern matching

## Advantages

- **Fast prefix searches**: O(m) time complexity
- **Space efficient**: Shared prefixes save memory
- **Predictable performance**: No hash collisions

## Disadvantages

- **Memory usage**: Can be high for sparse data
- **Cache performance**: Poor locality of reference
- **Complexity**: More complex than hash tables

## Related Concepts

- [[binary-tree]] - Similar tree structure with different branching
- [[symbol-tables]] - Used for implementing symbol tables efficiently
