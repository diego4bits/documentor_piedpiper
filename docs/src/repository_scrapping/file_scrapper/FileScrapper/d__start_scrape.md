## `_start_scrape(file_path: Path) -> None`

#### Description:
This method performs the initial steps to start the scraping process on a specific file. It belongs to the class `FileScrapper`.

#### Parameters:
- `file_path` (`Path`): The path to the file that will be scraped.

#### Returns:
- `None`: This method does not return any value.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
file_scrapper = FileScrapper()
file_scrapper._start_scrape(Path("path/to/file.py"))
```

#### How it Works:
1. Check if the file extension is supported by checking if it is a member of the `FileExtension` enumeration.
2. If the file extension is supported, update the current file to the provided file path.
3. Change the file being processed by the `CodeScrapper` object to the current file.
4. Extract code snippets from the current file using the `CodeScrapper` object.

#### Dependencies:
- `CodeScrapper`: Responsible for extracting code snippets from a file.
- `CodeSnippet`: Represents a code snippet.
- `FileHandler`: Handles file-related operations.
- `DocIgnore`: Filters out documentation comments from code snippets.
- `GitManager`: Manages Git-related operations.
- `Path`: Represents a file path.
- `List`: Represents a list of objects.
- `Dict`: Represents a dictionary of key-value pairs.
- `FileExtension`: Provides supported file extensions for scraping.