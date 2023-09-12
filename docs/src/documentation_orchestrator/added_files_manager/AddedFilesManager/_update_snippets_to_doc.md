## `_update_snippets_to_doc() -> None`

#### Description:
This method performs the update of snippets to the documentation and is used for managing added files. This method belongs to the class `AddedFilesManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exception.

#### Usage Cases:

```python
# Update snippets to documentation
added_files_manager._update_snippets_to_doc()
```

#### How it Works:
The `_update_snippets_to_doc` method starts the added file scrapper, which extracts snippets from the added files and stores them in a dictionary. Then, it updates the snippet storage with the snippets stored in the dictionary.

#### Dependencies:
- `FileScrapper`: Responsible for scraping snippets from the added files.
- `SnippetStorage`: Responsible for storing and managing the snippets.
- `GitFileChecker`: Responsible for checking the status of the added files in the Git repository.
- `GitManager`: Responsible for managing the Git repository.
- `SingletonMeta`: Metaclass used for implementing the Singleton design pattern.
- `ClassVar`: Type hint used for declaring class-level variables.