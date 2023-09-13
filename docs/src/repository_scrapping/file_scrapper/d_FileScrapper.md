## `FileScrapper`

#### Description:
This class represents a file scrapper and provides functionalities for scrapping code snippets from files.

#### Attributes:
- `_root_dir` (`Path`): The root directory path where the file scrapper operates.
- `_current_file` (`FileHandler`): The current file being processed by the file scrapper.
- `_code_scrapper` (`CodeScrapper`): An instance of the CodeScrapper class used for scrapping code snippets from files.
- `_ignore` (`DocIgnore`): An instance of the DocIgnore class used for ignoring specific files or directories during the scrapping process.

#### Usage Cases:

```python
# Instantiating and using the FileScrapper class
root_dir = Path('/path/to/root/directory')
file_scrapper = FileScrapper(root_dir)
# The rest of the example
```

#### How it Works:
The FileScrapper class operates on a specified root directory and provides functionalities for scrapping code snippets from files within that directory. It utilizes an instance of the CodeScrapper class to extract code snippets from files, and an instance of the DocIgnore class to ignore specific files or directories during the scrapping process.

#### Dependencies:
- `CodeScrapper`: This class is used for scrapping code snippets from files.
- `FileHandler`: This class is used for handling files.
- `DocIgnore`: This class is used for ignoring specific files or directories during the scrapping process.
- `GitManager`: This class is used for managing git operations.
- `Path`: This class is used for representing file system paths.
- `List`: This class is used for representing lists of elements.
- `Dict`: This class is used for representing dictionaries.