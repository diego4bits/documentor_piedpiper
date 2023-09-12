## `LanguageNodes`

#### Description:
This class represents the language nodes and provides functionalities for manipulating and working with specific entities or concepts within a programming language.

#### Attributes:
- `py` (`Tuple[Set[str], Set[str]]`): A tuple containing two sets of strings. The first set represents the language nodes related to class definitions and function definitions, while the second set represents only the language nodes related to function definitions. Default: `({}, {})`.

#### Usage Cases:

```python
# Initializing an instance of LanguageNodes
ln = LanguageNodes()

# Accessing the 'py' attribute
ln.py
```

#### How it Works:
The `LanguageNodes` class allows for the manipulation and management of language nodes within a programming language. It provides various methods and functionalities to work with specific entities or concepts, such as class definitions and function definitions.

#### Dependencies:
- `Tuple` from the `typing` module: Used to define the type of the `py` attribute.
- `Set` from the `typing` module: Used to define the type of the sets within the `py` attribute.
- This class does not have any additional dependencies.