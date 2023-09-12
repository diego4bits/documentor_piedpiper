## `scrape_specified(specified_files: List[Path]) -> bool`

#### Description:
This method performs the scraping of specified files and is used for scraping multiple files at once. This method belongs to the class `FileScrapper`.

#### Parameters:
- `specified_files` (`List[Path]`): A list of file paths that need to be scraped.

#### Returns:
- `bool`: Returns `True` if the scraping of specified files is successful.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = scrape_specified([Path('file1.py'), Path('file2.py')])
print(result_case1)

# Another use case (if applicable)
result_case2 = scrape_specified([Path('fileA.py'), Path('fileB.py'), Path('fileC.py')])
print(result_case2)
```

#### How it Works:
- The method takes a list of file paths as input.
- It iterates over each file path in the given list.
- For each file path, it checks if the file is valid using the `_valid_file` method.
- If the file is valid, it starts the scraping process using the `_start_scrape` method.
- Finally, it returns `True` indicating the successful scraping of specified files.

#### Dependencies:
- This method does not have any dependencies.