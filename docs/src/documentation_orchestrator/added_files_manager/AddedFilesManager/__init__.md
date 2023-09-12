## `__init__() -> None`

#### Description:
This method initializes an instance of the `AddedFilesManager` class. It creates two private instance variables: `_added_file_scrapper` of type `FileScrapper` and `_snippets_to_doc` of type `SnippetStorage`. 

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Usage Cases:

```python
# Initializing an instance of the AddedFilesManager class
added_files_manager = AddedFilesManager()
```

#### How it Works:
The `__init__` method creates an instance of the `AddedFilesManager` class. It initializes the `_added_file_scrapper` variable by creating an instance of the `FileScrapper` class. It also initializes the `_snippets_to_doc` variable by creating an instance of the `SnippetStorage` class.

#### Dependencies:
- `FileScrapper`: This class is responsible for scraping files.
- `SnippetStorage`: This class is responsible for storing snippets.