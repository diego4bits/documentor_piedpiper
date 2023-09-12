## `_start_file_scrapper_tail() -> None`

#### Description:
This method performs the tail commit selection and initiates the file scraping process for modified files. This method belongs to the class `ModifiedFilesManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Initiates the file scraping process for modified files
manager._start_file_scrapper_tail()
```

#### How it Works:
1. Calls the `select_tail_commit()` method from the `GitManager` class to select the tail commit.
2. Initiates the file scraping process for modified files by calling the `scrape_specified()` method from the `_file_scrapper_tail` object.

#### Dependencies:
- `GitManager`: Manages the Git repository and provides methods for selecting the tail commit.
- `GitFileChecker`: Checks for modified files in the Git repository.
- `FileScrapper`: Performs file scraping operations.
- `ModifiedFilesManager`: Manages the modified files and initiates the file scraping process.
- `SingletonMeta`: Metaclass for creating Singleton instances.
- `SnippetStorage`: Stores code snippets.
- `CodeSnippet`: Represents a code snippet.
- `Dict`: Built-in Python dictionary type.
- `ClassVar`: Type hint for a class variable.
- `typing`: Module for type hints in Python.