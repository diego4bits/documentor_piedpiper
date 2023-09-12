## `_create_doc_md() -> None`

#### Description:
This method creates a markdown document and writes the snippet documentation to it. It belongs to the class `DocWriter`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Example of how to use this method
doc_writer._create_doc_md()
```

#### How it Works:
The `_create_doc_md()` method first creates the parent directory of the current document path if it doesn't already exist. Then, it creates a new file at the specified path if it doesn't exist. Finally, it writes the snippet documentation to the file in UTF-8 encoding.

#### Dependencies:
This method does not have any dependencies.