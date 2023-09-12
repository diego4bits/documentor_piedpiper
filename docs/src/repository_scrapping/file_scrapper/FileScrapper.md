## `FileScrapper`

#### Description:
This class represents a file scrapper and provides functionalities for scrapping code snippets from files.

#### Attributes:
- `_root_dir` (`Path`): Represents the root directory where the file scrapper will operate.
- `_current_file` (`FileHandler`): Represents the current file being processed by the scrapper.
- `_code_scrapper` (`CodeScrapper`): Represents the code scrapper used to extract code snippets from files.
- `_ignore` (`DocIgnore`): Represents the ignore rules to be applied during the scrapping process.

#### Usage Cases:

```python
# Creating an instance of FileScrapper with a specified root directory
file_scrapper = FileScrapper(root_dir)

# Using the file scrapper to scrap code snippets
file_scrapper.scrap_code()

# Accessing the current file being processed
current_file = file_scrapper.current_file

# Accessing the code scrapper used by the file scrapper
code_scrapper = file_scrapper.code_scrapper

# Accessing the ignore rules applied by the file scrapper
ignore_rules = file_scrapper.ignore
```

#### How it Works:

The `FileScrapper` class is used to scrap code snippets from files. It operates on a specified root directory and uses a `CodeScrapper` object to extract code snippets from files. The scrapper applies ignore rules specified in a `DocIgnore` object to exclude certain files or directories from the scrapping process. The class keeps track of the current file being processed and provides methods to access it, as well as the code scrapper and ignore rules.

#### Dependencies:
- `CodeScrapper`: Represents the code scrapper used to extract code snippets from files.
- `FileHandler`: Represents a file handler used to handle file operations.
- `DocIgnore`: Represents ignore rules to be applied during the scrapping process.
- `GitManager`: Represents a Git manager used for version control operations.
- `Path`: Represents a path in the file system.
- `List`: Represents a list of elements.
- `Dict`: Represents a dictionary (key-value pairs).
- `FileExtension`: Represents file extensions used by the tree-sitter-logic library.