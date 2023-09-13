## `_update_current_file(file_path: Path)`

#### Description:
This method updates the current file being processed in the FileScrapper class.

#### Parameters:
- `file_path` (`Path`): The path to the file that needs to be updated.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
scrapper = FileScrapper()
scrapper._update_current_file(file_path)
```

#### How it Works:
The `_update_current_file` method takes a file path as input and creates a new instance of the `FileHandler` class, passing the file path to it. This new instance of `FileHandler` is then assigned to the `_current_file` attribute of the `FileScrapper` class. This allows the `FileScrapper` class to keep track of the current file being processed.

#### Dependencies:
- `FileHandler`: This class is responsible for handling file operations and is used to create a new instance in the `_update_current_file` method.