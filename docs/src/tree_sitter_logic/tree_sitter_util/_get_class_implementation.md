## `LanguageNodes`

#### Description:
This class represents a collection of language nodes and provides functionalities for managing and working with these nodes.

#### Attributes:
- `py` (`Tuple[Set[str], Set[str]]`): A tuple containing two sets of strings. The first set represents the available language nodes, such as class definitions and function definitions. The second set represents a subset of the first set, specifically the language nodes related to function definitions. Default: `({"class_definition", "function_definition"}, {"function_definition"})`.

#### Usage Cases:

```python
# Instantiating the class
nodes = LanguageNodes()

# Accessing the 'py' attribute
py_nodes = nodes.py
```

#### How it Works:
The `LanguageNodes` class allows for the management and manipulation of language nodes. It provides access to a set of language nodes, specifically related to Python, through the `py` attribute. The `py` attribute is a tuple containing two sets, where the first set represents the available language nodes and the second set represents a subset of the first set, specifically related to function definitions. This class can be used to access and manipulate language nodes for various purposes within a Python project.

#### Dependencies:
- `tree_sitter.Language`: This class is required to interact with the language parser and retrieve language-specific nodes.
- `Enum`: This class is required to define enumerations for the different language nodes.
- `Tuple`: This class is required to define a tuple data structure for storing the language nodes.
- `Set`: This class is required to define sets for storing the language nodes.
- This class does not have any other dependencies.