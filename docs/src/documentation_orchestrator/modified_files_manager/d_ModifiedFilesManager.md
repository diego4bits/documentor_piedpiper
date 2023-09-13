## `ModifiedFilesManager`

#### Description:
This class represents a manager for modified files. It is responsible for managing and tracking the files that have been modified, added or deleted. It also handles the storage and retrieval of code snippets related to these modified files.

#### Attributes:
- `instance` (`ClassVar`): A class variable that holds an instance of the ModifiedFilesManager class. This is used to implement the Singleton design pattern.
- `_file_scrapper_tail` (`FileScrapper`): An instance of the FileScrapper class used for scraping files from the tail of a repository.
- `_file_scrapper_front` (`FileScrapper`): An instance of the FileScrapper class used for scraping files from the front of a repository.
- `_snippets_to_doc` (`SnippetStorage`): An instance of the SnippetStorage class used for storing code snippets that need to be documented.
- `_snippets_to_delete` (`SnippetStorage`): An instance of the SnippetStorage class used for storing code snippets that need to be deleted.
- `_old_deleted_snippets_dict` (`Dict[int, CodeSnippet]`): A dictionary that stores the deleted code snippets along with their IDs.
- `_new_added_snippets_dict` (`Dict[int, CodeSnippet]`): A dictionary that stores the newly added code snippets along with their IDs.
- `_modified_snippets_dict` (`Dict[int, CodeSnippet]`): A dictionary that stores the modified code snippets along with their IDs.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case of instantiating and using the class
instance = ModifiedFilesManager()
# The rest of the example
```

#### How it Works:

The ModifiedFilesManager class is responsible for managing and tracking modified files in a repository. It uses two instances of the FileScrapper class, `_file_scrapper_tail` and `_file_scrapper_front`, to scrape files from the tail and front of the repository, respectively. It also uses two instances of the SnippetStorage class, `_snippets_to_doc` and `_snippets_to_delete`, to store code snippets that need to be documented or deleted.

The class maintains three dictionaries, `_old_deleted_snippets_dict`, `_new_added_snippets_dict`, and `_modified_snippets_dict`, to keep track of the deleted, newly added, and modified code snippets, respectively. These dictionaries store the code snippets along with their unique IDs.

The ModifiedFilesManager class follows the Singleton design pattern, meaning that only one instance of the class can exist at a time. The `instance` class variable is used to hold the instance of the class and ensure that only one instance is created.

#### Dependencies:
- `git_tools.git_file_checker.GitFileChecker`: This class is used to check if a file is modified or not.
- `git_tools.git_manager.GitManager`: This class is used for managing Git operations.
- `snippet_management.snippet_storage.SnippetStorage`: This class is used for storing code snippets.
- `snippet_management.code_snippet.CodeSnippet`: This class represents a code snippet.
- `repository_scrapping.file_scrapper.FileScrapper`: This class is used for scraping files from a repository.
- `metaclasses.singleton_meta.SingletonMeta`: This metaclass is used to implement the Singleton design pattern.
- `typing.Dict`: This is a type hint used to indicate a dictionary data structure.
- `typing.ClassVar`: This is a type hint used to indicate a class variable.