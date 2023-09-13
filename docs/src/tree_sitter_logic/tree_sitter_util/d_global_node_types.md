## `global_node_types`

#### Description:
This code snippet identifies and returns a list of child nodes from a given root node that have a type matching any of the specified node types.

#### Important info:
This code snippet is important for filtering and manipulating tree structures represented by the Tree-sitter library. It allows for easy retrieval of specific types of nodes from a given root node.

#### Usage :

- This code snippet is used to filter and retrieve child nodes with specific types from a root node.
- This code snippet is used to manipulate and process tree structures represented by the Tree-sitter library.

#### How it Works:
The `global_node_types` function takes two parameters: `root` and `node_types`. 

- `root` is the root node of a tree structure.
- `node_types` is a set of strings representing the types of nodes to be retrieved.

The function iterates over the `children` of the `root` node and filters them based on their `type`. It returns a list of child nodes whose types match any of the specified `node_types`.

#### Dependencies:
- `Node`: This is a class imported from the `tree_sitter` module. It represents a node in a tree structure.
- `Set`: This is a class imported from the `typing` module. It represents an unordered collection of unique elements.