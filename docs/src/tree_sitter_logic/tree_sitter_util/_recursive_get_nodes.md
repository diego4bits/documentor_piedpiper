## `LanguageNodes`

#### Description:
This class represents a set of language nodes and provides functionalities related to language parsing and analysis.

#### Attributes:
- `py` (`Tuple[Set[str], Set[str]]`): A tuple containing two sets of strings. The first set represents the language nodes that are valid in Python for defining classes and functions. The second set represents the language nodes that are valid in Python for defining functions. Default: `({"class_definition", "function_definition"}, {"function_definition"})`.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case of instantiating and using the class
py_nodes = LanguageNodes.py
# The rest of the example
```

#### How it Works:

The class `LanguageNodes` is used to store and provide access to sets of language nodes that are valid in a particular programming language. In this case, the class specifically focuses on Python language nodes. The `py` attribute is a tuple containing two sets of strings. The first set represents the language nodes that are valid in Python for defining classes and functions, while the second set represents the language nodes that are valid in Python for defining functions. These sets can be accessed using the `py` attribute of an instance of the `LanguageNodes` class.

#### Dependencies:
- `tree_sitter.Language`: This class is used for language parsing and analysis.
- `Enum`: This class is used for creating enumerations.
- `Tuple`: This class is used for creating tuples.
- `Set`: This class is used for creating sets.
- This class does not have any additional dependencies.