## `__init__(file_path: Path) -> None`

#### Description:
This method initializes a FileHandler instance. It checks if the provided file path is a valid file, and if so, it sets the instance variables `file_path`, `file_name`, `file_extension`, and `file_str`. If the file path is not valid, it raises an exception.

#### Parameters:
- `file_path` (`Path`): The path to the file.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
- `Exception`: Raised when the provided file path is not a valid file.

#### Usage Cases:

```python
# Initializing a FileHandler instance with a valid file path
file_path = Path("path/to/file.txt")
handler = FileHandler(file_path)

# Initializing a FileHandler instance with an invalid file path
file_path = Path("path/to/folder")
handler = FileHandler(file_path)  # Raises an exception
```

#### How it Works:
The method first checks if the provided `file_path` is a valid file by calling the `is_file()` method. If it is a file, the instance variables `file_path`, `file_name`, `file_extension`, and `file_str` are set accordingly. If the `file_path` is not a valid file, an exception is raised.

#### Dependencies:
- `GitRetrieaver`: This method uses the `GitRetrieaver` class to retrieve the contents of the file from a Git repository.
- `Path`: This method depends on the `Path` class from the `pathlib` module to handle file paths.