## `_start_file_scrappers() -> None`

#### Description:
This method starts two file scrappers, one for the front and one for the tail of the files. It belongs to the class `ModifiedFilesManager` and is used to initiate the scrapping process for modified files.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not raise any exceptions.

#### Usage Cases:

```python
# Starting the file scrappers
manager = ModifiedFilesManager()
manager._start_file_scrappers()
```

#### How it Works:
The `_start_file_scrappers()` method starts two file scrappers, namely `_start_file_scrapper_front()` and `_start_file_scrapper_tail()`. These two scrappers are responsible for scraping the modified files from the front and the tail, respectively. By calling this method, the scrapping process for modified files is initiated.

#### Dependencies:
- `ModifiedFilesManager`: This class is responsible for managing the modified files.
- `_start_file_scrapper_front()`: This method starts the file scrapper for the front of the files.
- `_start_file_scrapper_tail()`: This method starts the file scrapper for the tail of the files.