## `_scrape_assignment() -> None`

#### Description:
This method performs the scraping of assignment nodes in the abstract syntax tree (AST) of a code file. It belongs to the class `CodeScrapper`.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not have a return value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate usage
code_scrapper = CodeScrapper()
code_scrapper._scrape_assignment()
```

#### How it Works:
The method retrieves the assignment nodes from the AST using the `get_nodes()` function from the `tree_sitter_logic.tree_sitter_util` module. It then iterates over each assignment node and creates a `SnippetExtract` object to extract the relevant information from the node and the code file. The extracted information is then used to create a `CodeSnippet` object. Finally, the `CodeSnippet` object is saved using the `_save_code_snippet()` method.

#### Dependencies:
- `tree_sitter_logic.tree_sitter_util.get_nodes`: This function is used to retrieve the assignment nodes from the AST.
- `snippet_management.snippet_extract.SnippetExtract`: This class is used to extract relevant information from the assignment nodes.
- `snippet_management.code_snippet.CodeSnippet`: This class is used to create `CodeSnippet` objects.
- `snippet_management.snippet_storage.SnippetStorage._save_code_snippet`: This method is used to save the `CodeSnippet` objects.