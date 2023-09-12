## `LanguageNodes`

#### Description:
This class represents a collection of nodes related to a specific programming language. It provides functionalities for managing and working with these nodes.

#### Attributes:
- `py` (`Tuple[Set[str], Set[str]]`): A tuple containing two sets of strings representing different types of nodes in the Python programming language. The first set represents the types of nodes that can be present in a Python file, such as class definitions and function definitions. The second set represents the types of nodes that can only be function definitions. Default: `({"class_definition", "function_definition"}, {"function_definition"})`.

#### Usage Cases:

```python
# Instantiating an instance of LanguageNodes
nodes = LanguageNodes()

# Accessing the 'py' attribute
print(nodes.py)
# Output: ({"class_definition", "function_definition"}, {"function_definition"})
```

#### How it Works:
The `LanguageNodes` class provides a way to manage and work with nodes of a specific programming language. It includes an attribute `py` which contains sets of strings representing different types of nodes in the Python programming language. These sets can be used to filter and manipulate nodes based on their type.

#### Dependencies:
- `tree_sitter.Language`: This class is imported from the `tree_sitter` module and is used to represent a specific programming language.
- `Enum`: This class is imported from the `enum` module and is used to create enumerated types.
- `Tuple`: This class is imported from the `typing` module and is used to define tuples with specific types.
- `Set`: This class is imported from the `typing` module and is used to define sets with specific types.