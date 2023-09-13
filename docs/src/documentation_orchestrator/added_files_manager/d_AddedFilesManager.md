## `AddedFilesManager`

#### Description:
This class represents a manager for added files. It provides functionalities for managing and processing added files in a repository.

#### Attributes:
- `instance` (`ClassVar`): A class variable representing an instance of the class.
- `_added_file_scrapper` (`FileScrapper`): An instance of the 'FileScrapper' class, used for scraping files.
- `_snippets_to_doc` (`SnippetStorage`): An instance of the 'SnippetStorage' class, used for storing snippets.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case of instantiating and using the class
instance = AddedFilesManager()
# The rest of the example
```

#### How it Works:

The 'AddedFilesManager' class is responsible for managing and processing added files in a repository. It utilizes the 'FileScrapper' class for scraping files and the 'SnippetStorage' class for storing snippets. The class provides various methods to handle added files, such as filtering, processing, and documenting them.

#### Dependencies:
- `FileScrapper`: This class is used for scraping files.
- `SnippetStorage`: This class is used for storing snippets.