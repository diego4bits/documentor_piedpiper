## `_start_file_scrapper_front() -> None`

#### Description:
This method performs the front-end file scraping process and is used to scrape specified files that have been modified. This method belongs to the class 'ModifiedFilesManager'.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not raise any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
modified_files_manager = ModifiedFilesManager()
modified_files_manager._start_file_scrapper_front()
```

#### How it Works:
1. The method calls the 'select_front_commit()' method from the 'GitManager' class to select the front-end commit.
2. The method then calls the 'scrape_specified()' method from the '_file_scrapper_front' object to scrape the specified files that have been modified.

#### Dependencies:
- `GitManager`: Manages the Git repository and commits.
- `GitFileChecker`: Checks for modified files in the Git repository.
- `_file_scrapper_front`: An instance of the 'FileScrapper' class that is used to scrape files.