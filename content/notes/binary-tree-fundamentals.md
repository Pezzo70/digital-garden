---
title: Binary Tree Fundamentals
date: 2024-01-25
tags:
  - DSA
  - data-structures
  - algorithms
  - note
draft: false
---

A **Binary Tree** is a hierarchical data structure where each node has at most two children, typically referred to as the left child and right child.

## Structure

```
     Root
    /    \
   A      B
  / \    / \
 C   D  E   F
```

## Key Concepts

- **Root**: The topmost node of the tree
- **Parent**: A node that has child nodes
- **Child**: A node directly connected to a parent
- **Leaf**: A node with no children
- **Internal Node**: A node with at least one child
- **Height**: The length of the longest path from root to leaf
- **Depth**: The length of the path from root to a specific node

## Types of Binary Trees

### 1. Full Binary Tree
Every node has either 0 or 2 children.

### 2. Complete Binary Tree
All levels are filled except possibly the last level, which is filled from left to right.

### 3. Perfect Binary Tree
All internal nodes have 2 children and all leaves are at the same level.

### 4. Balanced Binary Tree
The height difference between left and right subtrees is at most 1.

## Common Operations

- **Insertion**: Add a new node
- **Deletion**: Remove a node
- **Search**: Find a specific value
- **Traversal**: Visit all nodes in a specific order

## Traversal Methods

### 1. Inorder (Left → Root → Right)
```python
def inorder(root):
    if root:
        inorder(root.left)
        print(root.data)
        inorder(root.right)
```

### 2. Preorder (Root → Left → Right)
```python
def preorder(root):
    if root:
        print(root.data)
        preorder(root.left)
        preorder(root.right)
```

### 3. Postorder (Left → Right → Root)
```python
def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.data)
```

## Related Concepts

- [[trie-data-structure]] - A tree-like data structure for string operations
- [[symbol-tables]] - Data structures for symbol tables

## Applications

- **Binary Search Trees**: Efficient searching and sorting
- **Expression Trees**: Representing mathematical expressions
- **Huffman Trees**: Data compression
- **Decision Trees**: Machine learning and decision making
