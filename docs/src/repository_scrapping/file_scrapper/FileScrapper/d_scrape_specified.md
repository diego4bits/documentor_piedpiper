## `scrape_specified(specified_files: List[Path]) -> bool`

#### Description:
This method performs the scraping of specified files and is used for scraping the contents of the specified files. This method belongs to the class FileScrapper.

#### Parameters:
- `specified_files` (`List[Path]`): A list of file paths that need to be scraped.

#### Returns:
- `bool`: Returns True indicating that the scraping process was successful.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
file_scrapper = FileScrapper()
specified_files = [Path('file1.txt'), Path('file2.txt')]
result = file_scrapper.scrape_specified(specified_files)
print(result)
```

#### How it Works:
The method takes a list of specified file paths as input. It iterates through each file path in the list. For each file path, it checks if the file is valid using the `_valid_file` method. If the file is valid, it starts the scraping process by calling the `_start_scrape` method. After scraping all the specified files, it returns True indicating the successful completion of the scraping process.

#### Dependencies:
- This method does not have any dependencies.