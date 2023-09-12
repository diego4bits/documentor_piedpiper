## `extract_snippets() -> bool`

#### Description:
This method performs the extraction of code snippets from a given input file. It is used to scrape relevant code snippets and assignments from the file. This method belongs to the class `CodeScrapper`.

#### Returns:
- `bool`: Returns `True` if the extraction process is successful.

#### Exceptions:
- `Exception`: This exception is raised when no file has been charged.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
scrapper = CodeScrapper()
scrapper.extract_snippets()
```

#### How it Works:
The method first checks if an input file has been charged using the `_check_input_file()` helper method. If no file has been charged, an exception is raised.

Next, the method calls the `_scrape_relevant()` and `_scrape_assignment()` helper methods to perform the actual scraping of relevant code snippets and assignments from the file.

Finally, the method returns `True` to indicate a successful extraction process.

#### Dependencies:
- `CodeScrapper_File_Error`: This exception is used when no file has been charged.