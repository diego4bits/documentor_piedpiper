## `_scrape_relevant() -> None`

#### Description:
This method performs the scraping of relevant nodes from the abstract syntax tree (AST) of a code file. It is used to extract important code snippets and save them. This method belongs to the class `CodeScrapper` in the file `code_scrapper.py`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value (None).

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate usage
scrapper = CodeScrapper()
scrapper._scrape_relevant()
```

#### How it Works:
1. The method calls `get_nodes()` to obtain a list of relevant nodes from the AST of the code file.
2. For each node in the list, the method creates a `SnippetExtract` object using the node information and the content of the file.
3. Then, a `CodeSnippet` object is created using the `SnippetExtract` object, the input file, and the file dependencies.
4. The method calls `_save_code_snippet()` to save the `CodeSnippet` to the snippet storage.

#### Dependencies:
- `get_nodes()`: This method is imported from the `tree_sitter_logic.tree_sitter_util` module. It is used to obtain the relevant nodes from the AST.
- `SnippetExtract`: This class is imported from the `snippet_management.snippet_extract` module. It is used to create `SnippetExtract` objects.
- `CodeSnippet`: This class is imported from the `snippet_management.code_snippet` module. It is used to create `CodeSnippet` objects.
- `_save_code_snippet()`: This method belongs to the `CodeScrapper` class. It is used to save the `CodeSnippet` objects to the snippet storage.