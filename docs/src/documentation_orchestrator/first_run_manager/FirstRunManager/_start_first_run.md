## `_start_first_run() -> None`

#### Description:
This method performs the initial setup and execution for the first run of the program. It selects the front commit using the GitManager, scrapes specified files using the FileScrapper, updates the SnippetStorage with all the scraped snippets, and saves them to the document.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
first_run_manager = FirstRunManager()
first_run_manager._start_first_run()
```

#### How it Works:
1. The method starts by selecting the front commit using the GitManager.
2. It then calls the `_first_run_scrapper.scrape_specified()` method of the FileScrapper, passing in all the valid file paths obtained from `GitFilePaths.get_all_valid_paths()`.
3. The `_first_run_scrapper.scrape_specified()` method scrapes the specified files and stores the snippets in the `storage_dict` attribute of the `_first_run_scrapper` object.
4. The method updates the SnippetStorage with all the snippets stored in the `storage_dict` using the `_snippets_to_doc.update_storage()` method.
5. Finally, the method saves the updated snippets to the document.

#### Dependencies:
- `GitManager`: Manages Git operations and provides the ability to select the front commit.
- `FileScrapper`: Scrapes specified files and stores the snippets.
- `GitFilePaths`: Provides the valid file paths obtained from the Git repository.
- `SnippetStorage`: Manages the storage and retrieval of snippets.
- `SingletonMeta`: Metaclass that ensures the FirstRunManager class has only one instance.