## `__init__(file_path: Path) -> None`

#### Description:
This method initializes an instance of the FileHandler class. It takes a file path as a parameter and performs the necessary operations to set up the instance variables. This method belongs to the class FileHandler.

#### Parameters:
- `file_path` (`Path`): The path of the file to be handled.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
- `Exception`: This exception is raised when the given file path is not a file.

#### Usage Cases:

```python
# Initializing a FileHandler instance with a file path
handler = FileHandler(Path("path/to/file.txt"))

# Another usage case (if applicable)
handler = FileHandler(Path("path/to/another_file.py"))
```

#### How it Works:

The method first checks if the given file path exists and is a file. If it is, then it proceeds to set the instance variables:
- `self.file_path`: The given file path.
- `self.file_name`: The name of the file (extracted from the file path).
- `self.file_extension`: The extension of the file (extracted from the file path).
- `self.file_str`: The contents of the file, retrieved using the GitRetrieaver class.

If the given file path is not a file, an exception is raised.

#### Dependencies:
- `GitRetrieaver`: This dependency is used to retrieve the contents of the file.
- `Path`: This dependency is used to represent file paths.