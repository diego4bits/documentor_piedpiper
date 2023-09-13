## `__init__() -> None`

#### Description:
This method initializes an instance of the `AddedFilesManager` class. It creates two instance variables: `_added_file_scrapper` and `_snippets_to_doc`. 

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not raise any exceptions.

#### Usage Cases:

```python
# Create an instance of AddedFilesManager
manager = AddedFilesManager()
```

#### How it Works:
The `__init__` method is called when a new instance of the `AddedFilesManager` class is created. It initializes two instance variables: `_added_file_scrapper` and `_snippets_to_doc`. These variables are created with instances of `FileScrapper` and `SnippetStorage` classes respectively. 

#### Dependencies:
- `FileScrapper`: This class is responsible for scraping files.
- `SnippetStorage`: This class is responsible for storing snippets.