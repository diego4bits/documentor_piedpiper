## `__str__() -> str`

#### Description:
This method returns a string representation of the `NodeInfo` object. It provides information about the node identifier, parent identifier, parent type, and node type. This method belongs to the class `NodeInfo`.

#### Returns:
- `str`: A string representation of the `NodeInfo` object.

#### Usage Cases:

```python
# Sample code to demonstrate the use of __str__() method
node_info = NodeInfo(node, file_str)
string_representation = str(node_info)
print(string_representation)
```

#### How it Works:
The `__str__()` method uses string formatting to create a string representation of the `NodeInfo` object. It includes the values of the `node_identifier`, `parent_identifier`, `parent_type`, and `node_type` attributes. The resulting string is returned as the output of the method.

#### Dependencies:
- This method does not have any dependencies.