## `__init__(root_dir: Path = Path(".")) -> None`

#### Description:
This method initializes an instance of the FileScrapper class. It sets the root directory of the file scrapper, initializes the DocIgnore object, the CodeScrapper object, and sets the current file to None.

#### Parameters:
- `root_dir` (`Path`, optional): The root directory of the file scrapper. Defaults to the current directory.

#### Returns:
- `None`: This method does not return anything.

#### Dependencies:
- `DocIgnore`: An object of the DocIgnore class is initialized to handle ignoring specific files and directories during the scrapper process.
- `CodeScrapper`: An object of the CodeScrapper class is initialized to handle the extraction of code snippets.
- `Path`: The pathlib.Path class is used to represent file system paths.

#### Usage Cases:

```python
# Initialize an instance of FileScrapper with the default root directory
scrapper = FileScrapper()
```

#### How it Works:
The method initializes an instance of the FileScrapper class with an optional root directory. It sets the root directory to the provided value or defaults to the current directory. It initializes the DocIgnore object with the root directory to handle ignoring specific files and directories during the scrapper process. It also initializes the CodeScrapper object to handle the extraction of code snippets. Finally, it sets the current file to None to indicate that no file has been processed yet.