## `FirstRunManager`

#### Description:
This class represents the manager responsible for handling the first run of a program. It provides functionalities for managing snippets and performing necessary actions during the first run.

#### Attributes:
- `instance` (`ClassVar`): A class variable that holds the instance of the `FirstRunManager` class. This attribute is used to implement the Singleton design pattern.
- `_snippets_to_doc` (`SnippetStorage`): An instance of the `SnippetStorage` class, used for storing and managing snippets.
- `_first_run_scrapper` (`FileScrapper`): An instance of the `FileScrapper` class, used for scrapping files during the first run.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case of instantiating and using the class
instance = FirstRunManager()
# The rest of the example
```

#### How it Works:

The `FirstRunManager` class is responsible for managing the first run of a program. It uses a `SnippetStorage` instance to store and manage snippets, and a `FileScrapper` instance to scrape files during the first run. The class follows the Singleton design pattern, which ensures that only one instance of the class exists.

#### Dependencies:
- `SnippetStorage`: A class that provides functionality for storing and managing snippets.
- `FileScrapper`: A class that provides functionality for scraping files.