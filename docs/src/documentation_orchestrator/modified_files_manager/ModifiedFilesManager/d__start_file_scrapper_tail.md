## `_start_file_scrapper_tail() -> None`

#### Description:
This method performs the tail commit selection and initiates the file scraping process for the modified files. This method belongs to the class ModifiedFilesManager.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
manager = ModifiedFilesManager()
manager._start_file_scrapper_tail()

# Another use case (if applicable)
...
```

#### How it Works:
The method first selects the tail commit using the `GitManager.select_tail_commit()` method. Then, it calls the `scrape_specified()` method of the `_file_scrapper_tail` object to initiate the file scraping process for the modified files.

#### Dependencies:
- `GitManager`: Manages the Git repository and provides methods for retrieving commit information.
- `GitFileChecker`: Checks the status of files in the Git repository.
- `FileScrapper`: Performs the file scraping process.
- `ModifiedFilesManager`: The class to which this method belongs.