## `_start_added_file_scrapper() -> None`

#### Description:
This method performs the scraping of added files and is used to initiate the process of scraping added files. This method belongs to the class `AddedFilesManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything (`None`).

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Start the scraping of added files
added_files_manager = AddedFilesManager()
added_files_manager._start_added_file_scrapper()
```

#### How it Works:
1. If there are added files according to the `GitFileChecker` class, the method proceeds to the next step.
2. The `GitManager` class is called to select the front commit.
3. The `_added_file_scrapper` object of the `FileScrapper` class is used to scrape the specified added files.

#### Dependencies:
- `GitFileChecker`: Checks for added files.
- `GitManager`: Manages the Git repository.
- `FileScrapper`: Scrapes files.
