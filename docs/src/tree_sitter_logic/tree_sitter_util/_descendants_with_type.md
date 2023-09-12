## `LanguageNodes`

#### Description:
This class represents a collection of language nodes and provides functionalities for working with these nodes.

#### Attributes:
- `py` (`Tuple[Set[str], Set[str]]`): A tuple containing two sets. The first set represents the allowed language nodes for a specific language, such as class definitions and function definitions. The second set represents the allowed language nodes for a specific language, such as only function definitions. Default: `({"class_definition", "function_definition"}, {"function_definition"})`.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case of instantiating and using the class
py_language_nodes = LanguageNodes()
# The rest of the example
```

#### How it Works:

The `LanguageNodes` class allows you to create a collection of language nodes and perform operations on these nodes. The `py` attribute represents the allowed language nodes for the Python language. The first set in the `py` attribute contains the language nodes that are allowed in general, such as class definitions and function definitions. The second set contains the language nodes that are allowed only for function definitions.

#### Dependencies:
- `tree_sitter.Language`: This class is imported from the `tree_sitter` module and is used to represent a specific language.
- `Enum`: This class is imported from the `enum` module and is used to define enumerations.
- `Tuple`: This class is imported from the `typing` module and is used to define a tuple.
- `Set`: This class is imported from the `typing` module and is used to define a set.

[In case of no dependencies display] This class does not have any dependencies.