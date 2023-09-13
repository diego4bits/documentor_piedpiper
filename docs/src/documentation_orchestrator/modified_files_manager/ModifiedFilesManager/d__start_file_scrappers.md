## `_start_file_scrappers() -> None`

#### Description:
This method starts two file scrappers, one for the front of a file and another for the tail. It belongs to the class ModifiedFilesManager.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return anything.

#### Usage Cases:

```python
# Starting the file scrappers
modified_files_manager = ModifiedFilesManager()
modified_files_manager._start_file_scrappers()
```

#### How it Works:

The `_start_file_scrappers()` method starts two file scrappers, `_start_file_scrapper_front()` and `_start_file_scrapper_tail()`, which are responsible for scraping the front and tail of a file, respectively.

#### Dependencies:
- `GitFileChecker`: Responsible for checking the status of files in a Git repository.
- `GitManager`: Responsible for managing Git operations.
- `SnippetStorage`: Responsible for storing code snippets.
- `CodeSnippet`: Represents a code snippet.
- `FileScrapper`: Responsible for scraping files.
- `SingletonMeta`: Metaclass for creating singleton instances.
- `Dict`: Represents a dictionary.
- `ClassVar`: Represents a class variable.