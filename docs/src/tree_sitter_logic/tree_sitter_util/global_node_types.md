## `LanguageNodes`

#### Description:
This class represents a collection of language nodes and provides functionalities related to these nodes.

#### Attributes:
- `py` (`Tuple[Set[str], Set[str]]`): A tuple containing two sets of strings. The first set represents the global scope language nodes, such as class definitions and function definitions. The second set represents the language nodes specifically related to function definitions. 

#### Usage Cases:

```python
# Sample code to demonstrate a common use case of instantiating and using the class
instance = LanguageNodes()
# The rest of the example
```

#### How it Works:

This class is used as a container for language nodes. It provides a way to organize and access different types of language nodes, such as class definitions and function definitions. The `py` attribute is a tuple that stores two sets of language nodes, representing the global scope nodes and function definition nodes respectively. This class can be used to store and manipulate language nodes in a convenient way.

#### Dependencies:
- `tree_sitter.Language`: This class is required for working with tree-sitter language objects.
- `Enum`: This class is required for working with enumerated types.
- `Tuple`, `Set`: These classes are required for defining the attribute types.