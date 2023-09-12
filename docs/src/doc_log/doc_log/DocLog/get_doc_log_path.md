## `get_doc_log_path() -> Path`

#### Description:
This method returns the path to the document log file. It belongs to the class `DocLog`.

#### Parameters:
This method does not have any parameters.

#### Returns:
- `Path`: The path to the document log file.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Getting the document log path
path = get_doc_log_path()
print(path)
```

#### How it Works:

The method simply returns a `Path` object representing the path to the document log file. The file path is set as "./doc.log".

#### Dependencies:
- This method does not have any dependencies.