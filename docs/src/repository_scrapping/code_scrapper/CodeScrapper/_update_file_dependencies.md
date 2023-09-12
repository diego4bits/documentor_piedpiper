## `_update_file_dependencies() -> None`

#### Description:
This method updates the file dependencies for the CodeScrapper class.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Updating file dependencies
scrapper = CodeScrapper()
scrapper._update_file_dependencies()
```

#### How it Works:
This method initializes the `_file_dependencies` attribute of the CodeScrapper class with a new instance of the DependenciesInfo class. The `_ast_root` and `_input_file.file_str` are used as arguments for initializing the DependenciesInfo object.

#### Dependencies:
- `DependenciesInfo`: Represents the dependencies information for a file.
- `CodeScrapper`: The class to which this method belongs.