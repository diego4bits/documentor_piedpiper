## `_create_doc_md()`

#### Description:
This method creates a markdown document for the current snippet documentation. It belongs to the class `DocWriter`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Example usage of _create_doc_md()
doc_writer = DocWriter()
doc_writer._create_doc_md()
```

#### How it Works:
The `_create_doc_md()` method first creates the parent directory for the current document path if it does not already exist. Then, it creates a new empty file at the current document path. Finally, it writes the snippet documentation to the file using UTF-8 encoding.

#### Dependencies:
- `Path`: This method uses the `Path` class from the `pathlib` module to manipulate file paths.