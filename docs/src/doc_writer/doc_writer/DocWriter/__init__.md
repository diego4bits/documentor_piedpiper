## `__init__(self) -> None`

#### Description:
This method initializes the `DocWriter` class and sets up the initial values for its attributes. This method belongs to the class `DocWriter`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Initializing an instance of the DocWriter class
doc_writer = DocWriter()
```

#### How it Works:
The `__init__` method is called when an instance of the `DocWriter` class is created. It sets the `doc_path` attribute to a `Path` object representing the "./docs" directory. It also initializes the following attributes to `None`: `snippets_to_doc`, `current_snippet`, `current_doc_path`, and `snippet_documentation`.

#### Dependencies:
- `Path`: This method uses the `Path` class from the `pathlib` module to represent the "./docs" directory.