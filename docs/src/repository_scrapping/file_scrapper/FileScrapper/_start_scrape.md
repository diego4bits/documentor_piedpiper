## `_start_scrape(file_path: Path) -> None`

#### Description:
This method performs the initial steps to start the scraping process for a given file. It belongs to the class `FileScrapper`.

#### Parameters:
- `file_path` (`Path`): The path to the file that needs to be scraped.

#### Returns:
- `None`: This method does not return any value.

#### Dependencies:
- `CodeScrapper`: This dependency is used to perform the code scraping process.
- `CodeSnippet`: This dependency is used to store the extracted code snippets.
- `FileHandler`: This dependency is used to handle the file operations.
- `DocIgnore`: This dependency is used to handle the ignored documentation.
- `GitManager`: This dependency is used to manage the Git repository.
- `Path`: This dependency is used to represent the file path.
- `List`: This dependency is used to represent a list of items.
- `Dict`: This dependency is used to represent a dictionary of key-value pairs.
- `FileExtension`: This dependency is used to determine the file extension.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
file_scrapper = FileScrapper()
file_scrapper._start_scrape(Path('path/to/file.py'))

# Another use case (if applicable)
file_scrapper._start_scrape(Path('path/to/another_file.py'))
```

#### How it Works:

1. Check if the file extension of the given `file_path` is supported by the `FileExtension` enum.
2. If the file extension is supported, proceed with the scraping process.
3. Update the current file to `file_path`.
4. Change the file to be processed by the `CodeScrapper` to the updated current file.
5. Extract code snippets using the `CodeScrapper` object.

#### Exceptions:
- This method does not throw any exceptions.