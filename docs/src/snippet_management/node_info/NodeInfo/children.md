## `children() -> List[Node]`

#### Description:
This method returns a list of child nodes of the current node. It is used to access and manipulate the child nodes of a node. This method belongs to the class `NodeInfo`.

#### Parameters:
This method does not take any parameters.

#### Returns:
- `List[Node]`: A list of child nodes of the current node.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Example usage case 1:
children_list = node_info.children()
for child_node in children_list:
    print(child_node)

# Example usage case 2:
children_list = node_info.children()
for child_node in children_list:
    # Perform some operations on each child node
    pass
```

#### How it Works:
The `children` method retrieves the child nodes of the current node and returns them as a list. Each child node is represented as an instance of the `Node` class. The method simply accesses the `children` attribute of the current node and returns its value.

#### Dependencies:
- `Node`: This class is imported from the `tree_sitter` module and represents a node in the parse tree.