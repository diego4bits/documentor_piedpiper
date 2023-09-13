## `_recursive_get_nodes`

#### Description:
This code snippet performs a recursive traversal of a tree structure represented by a given parent node and returns a list of all the nodes that match a set of specified types. It is typically used for extracting specific nodes from a tree structure.

#### Important info:
This function relies on the `NodeInfo` class from the `snippet_management.node_info` module and the `Node` class from the `tree_sitter` module.

#### Usage:
- This code snippet is used for extracting nodes of specific types from a tree structure.
- This code snippet is used for filtering out nodes based on their types.
- This code snippet is used for performing a recursive traversal of a tree structure.

#### How it Works:
The function takes in a `parent_node_info` object, which represents the parent node of the tree structure, a set of `types` indicating the specific types of nodes to be extracted, and a `file_str` string representing the tree structure.

The function initializes an empty list called `nodes_list` to store the matching nodes.

It then iterates over the `children` of the `parent_node_info`. For each child, it creates a `child_node_info` object using the `NodeInfo` class, passing in the child, the parent node info, and the file string.

The function then recursively calls itself, passing in the `child_node_info`, types, and file string. This recursive call returns a list of nodes that match the specified types.

The function extends the `nodes_list` with the child nodes returned by the recursive call.

If the type of the current child node matches one of the specified types, the function appends the `child_node_info` to the `nodes_list`.

Finally, the function returns the `nodes_list` containing all the matching nodes.

#### Dependencies:
- `NodeInfo`: Represents information about a node in a tree structure. It is imported from the `snippet_management.node_info` module.
- `Node`: Represents a node in a tree structure. It is imported from the `tree_sitter` module.