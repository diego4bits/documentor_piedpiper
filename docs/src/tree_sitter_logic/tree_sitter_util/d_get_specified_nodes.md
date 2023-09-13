## `get_specified_nodes`

#### Description:
This code snippet performs the action of retrieving all nodes of specified types from a given root node. It is typically used for extracting specific information or manipulating specific parts of a tree structure.

#### Important info:
This function relies on the helper function `_descendants_with_type` to recursively traverse the tree and collect nodes of the specified types.

#### Usage :

- This code snippet is used for extracting specific information from a tree structure.
- This code snippet is used for manipulating specific parts of a tree structure.
- This code snippet is used for filtering out nodes of certain types from a tree structure.

#### How it Works:
The function takes a root node and a set of node types as input parameters. It initializes an empty list called `nodes` to store the collected nodes.
 
Then, for each node type in the set of specified node types, it calls the `_descendants_with_type` function to retrieve all descendant nodes of that type from the root node. The collected nodes are then extended to the `nodes` list.

Finally, the function returns the list of collected nodes.

#### Dependencies:
- `Node`: The code snippet relies on the `Node` class from the `tree_sitter` library. This class represents a node in a tree structure.
- `List`: The code snippet uses the `List` class from the `typing` module to define the return type of the function as a list of nodes.
- `Set`: The code snippet uses the `Set` class from the `typing` module to define the type of the `node_types` parameter as a set of strings.

Note: This function does not have any external dependencies beyond the standard library.