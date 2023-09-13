## `_update_snippets_to_doc() -> None`

#### Description:
This method performs the task of updating the snippets in the documentation. It is used to add new snippets from the added files to the existing documentation. This method belongs to the class `AddedFilesManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value (`None`).

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
added_files_manager = AddedFilesManager()
added_files_manager._update_snippets_to_doc()
```

#### How it Works:
This method first starts the added file scrapper by calling the `_start_added_file_scrapper()` method. Then, it retrieves the snippets to be added from the `storage_dict` attribute of the added file scrapper. Finally, it updates the snippet storage by calling the `update_storage()` method of the `SnippetStorage` class with the retrieved snippets.

#### Dependencies:
- `FileScrapper`: This class is responsible for scraping added files and extracting snippets.
- `SnippetStorage`: This class is responsible for storing and managing the snippets.
- `GitFileChecker`: This class is responsible for checking if a file is present in the git repository.
- `GitManager`: This class is responsible for managing the git repository.
- `SingletonMeta`: This metaclass is responsible for creating singleton instances of classes.
- `typing.ClassVar`: This module provides support for runtime type checking of variables.
- This method has dependencies on other classes and modules, but they are not specified in the provided information.