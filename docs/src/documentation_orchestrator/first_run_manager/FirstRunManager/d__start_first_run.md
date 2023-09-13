## `_start_first_run() -> None`

#### Description:
This method performs the initial setup for the first run of the application. It selects the front commit using the GitManager class, scrapes the specified files using the FileScrapper class, and updates the storage with the snippets found. This method belongs to the FirstRunManager class.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
first_run_manager = FirstRunManager()
first_run_manager._start_first_run()
```

#### How it Works:
1. The method first calls the `select_front_commit()` method of the GitManager class to select the front commit.
2. It then calls the `scrape_specified()` method of the `_first_run_scrapper` object, passing in all the valid file paths obtained from `GitFilePaths.get_all_valid_paths()`.
3. The snippets found during the scraping process are stored in the `all_snippets_to_doc_dict` variable.
4. Finally, the `_snippets_to_doc` object's `update_storage()` method is called to update the storage with the snippets from `all_snippets_to_doc_dict`.

#### Dependencies:
- `git_tools.git_file_paths.GitFilePaths`: This class provides the valid file paths from a Git repository.
- `git_tools.git_manager.GitManager`: This class is used to select the front commit.
- `repository_scrapping.file_scrapper.FileScrapper`: This class is used to scrape specified files.
- `snippet_management.snippet_storage.SnippetStorage`: This class is used to store the snippets found during the first run.
- `metaclasses.singleton_meta.SingletonMeta`: This metaclass is used for the FirstRunManager class.
- `typing.ClassVar`: This type hint is used to specify the type of class variables.