## `AddedFilesManager`

#### Description:
This class represents a manager for added files in a repository. It provides functionalities for managing and processing added files.

#### Attributes:
- `instance` (`ClassVar`): Represents the instance of the class. This attribute is shared among all instances of the class.
- `_added_file_scrapper` (`FileScrapper`): Represents an instance of the `FileScrapper` class, which is responsible for scrapping files.
- `_snippets_to_doc` (`SnippetStorage`): Represents an instance of the `SnippetStorage` class, which is responsible for storing snippets.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case of instantiating and using the class
instance = AddedFilesManager()
# The rest of the example
```

#### How it Works:

The `AddedFilesManager` class manages added files in a repository. It uses an instance of the `FileScrapper` class to scrap files and an instance of the `SnippetStorage` class to store snippets. The class provides functionalities for managing and processing added files, but the specific methods are not provided in the given information.

#### Dependencies:
- `FileScrapper`: Represents a file scrapper module that is responsible for scrapping files.
- `SnippetStorage`: Represents a snippet storage module that is responsible for storing snippets.