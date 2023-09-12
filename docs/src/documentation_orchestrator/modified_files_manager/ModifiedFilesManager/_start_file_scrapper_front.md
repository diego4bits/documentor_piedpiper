## `_start_file_scrapper_front() -> None`

#### Description:
This method performs the file scraping process for the front-end files that have been modified. It is used to scrape the specified modified files in the front-end. This method belongs to the class `ModifiedFilesManager`.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
ModifiedFilesManager._start_file_scrapper_front()
```

#### How it Works:
This method first selects the front-end commit using the `GitManager.select_front_commit()` method. Then, it calls the `scrape_specified()` method of the `_file_scrapper_front` object to perform the file scraping process for the modified front-end files.

#### Dependencies:
- `GitManager`: This dependency is used to select the front-end commit.
- `GitFileChecker`: This dependency is used to determine the modified files.
- `FileScrapper`: This dependency is used to perform the file scraping process.
- `ModifiedFilesManager`: This dependency is the class to which this method belongs.