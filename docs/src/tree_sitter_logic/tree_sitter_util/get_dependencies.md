## `LanguageNodes`

#### Description:
This class represents a collection of nodes related to a specific language. It provides functionalities for managing and manipulating these language nodes.

#### Attributes:
- `py` (`Tuple[Set[str], Set[str]]`): A tuple containing two sets. The first set represents the language nodes related to class definitions and function definitions. The second set represents the language nodes related only to function definitions. 

#### Usage Cases:

```python
# Importing the class
from languages import LanguageNodes

# Instantiating the class
nodes = LanguageNodes()

# The rest of the example
```

#### How it Works:
The class `LanguageNodes` provides a way to manage and manipulate language nodes for a specific language. It has an attribute `py` which is a tuple containing sets of language nodes. The first set in the tuple represents the language nodes related to class definitions and function definitions, while the second set represents the language nodes related only to function definitions.

#### Dependencies:
- `tree_sitter.Language`: A dependency required for the `LanguageNodes` class to work. It is used to interact with the tree-sitter library.
- `Enum`: A dependency required for the `LanguageNodes` class to work. It is used for defining enumerations.
- `typing.Tuple`, `typing.Set`: Dependencies required for the `LanguageNodes` class to work. They are used for type hints.