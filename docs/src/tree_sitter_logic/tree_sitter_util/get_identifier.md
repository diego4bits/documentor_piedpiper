## `LanguageNodes`

#### Description:
This class represents a collection of language nodes and provides functionalities for working with these nodes.

#### Attributes:
- `py` (`Tuple[Set[str], Set[str]]`): A tuple containing two sets. The first set represents the language nodes related to class definitions and function definitions. The second set represents the language nodes related only to function definitions. Default: `({"class_definition", "function_definition"}, {"function_definition"})`

#### Usage Cases:

```python
# Sample code to demonstrate a common use case of instantiating and using the class
instance = LanguageNodes()
# The rest of the example
```

#### How it Works:

The `LanguageNodes` class is used to represent a collection of language nodes. It has an attribute `py` which is a tuple containing two sets. The first set in the tuple represents the language nodes related to class definitions and function definitions, while the second set represents the language nodes related only to function definitions.

#### Dependencies:
- `tree_sitter.Language`: This dependency provides the language parsing functionality.
- `enum.Enum`: This dependency provides the Enum class for creating enumerations.
- `typing.Tuple`: This dependency provides the Tuple class for creating tuple objects.
- `typing.Set`: This dependency provides the Set class for creating set objects.