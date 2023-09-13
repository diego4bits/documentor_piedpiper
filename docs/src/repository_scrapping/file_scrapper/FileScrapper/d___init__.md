## `__init__(root_dir: Path = Path(".")) -> None`

#### Description:
This method initializes an instance of the `FileScrapper` class. It sets the root directory, creates an instance of `DocIgnore`, `CodeScrapper`, and sets the current file to None.

#### Parameters:
- `root_dir` (`Path`, optional): The root directory to start the file scrapping process. Defaults to the current directory.

#### Returns:
- `None`: This method does not return any value.

#### Dependencies:
- `DocIgnore`: This class is used to ignore certain files or directories during the file scrapping process.
- `CodeScrapper`: This class is used to extract code snippets from files.
- `Path`: This class is used to represent file paths.

#### Usage Cases:

```python
# Initialize an instance of FileScrapper with the default root directory
file_scrapper = FileScrapper()

# Initialize an instance of FileScrapper with a specific root directory
file_scrapper = FileScrapper(Path("/path/to/root/directory"))
```

#### How it Works:
The `__init__` method takes an optional `root_dir` parameter, which represents the root directory for file scrapping. It sets the `_root_dir` attribute to the provided `root_dir`. It then creates an instance of `DocIgnore` with the `root_dir` and assigns it to the `_ignore` attribute. It also creates an instance of `CodeScrapper` and assigns it to the `_code_scrapper` attribute. Finally, it sets the `_current_file` attribute to None.