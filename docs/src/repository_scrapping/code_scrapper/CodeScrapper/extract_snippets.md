## `extract_snippets() -> bool`

#### Description:
This method performs the extraction of code snippets from a specified input file. It belongs to the class `CodeScrapper`.

#### Parameters:
This method does not take any parameters.

#### Returns:
- `bool`: Returns `True` if the extraction process is successful.

#### Exceptions:
- `Exception`: This exception is thrown when no file has been charged.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
scrapper = CodeScrapper()
result = scrapper.extract_snippets()
print(result)
```

#### How it Works:
1. Checks if an input file has been charged using the `_check_input_file()` method.
2. If no file has been charged, an exception is raised.
3. Calls the `_scrape_relevant()` method to perform the extraction of relevant code snippets.
4. Calls the `_scrape_assignment()` method to perform the extraction of assignment code snippets.
5. Returns `True` if the extraction process is successful.

#### Dependencies:
- `CodeScrapper`: This class depends on the class `CodeScrapper` for accessing its methods and attributes.