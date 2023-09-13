## `_update_file_dependencies() -> None`

#### Description:
This method updates the file dependencies for a CodeScrapper object. It belongs to the class CodeScrapper.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not raise any exceptions.

#### Usage Cases:

```python
# Sample usage
scrapper = CodeScrapper()
scrapper._update_file_dependencies()
```

#### How it Works:
This method updates the file dependencies of a CodeScrapper object by creating a new DependenciesInfo object. The DependenciesInfo object is initialized with the AST root and the file string of the input file.

#### Dependencies:
- `DependenciesInfo`: Represents the dependencies information of a code file.