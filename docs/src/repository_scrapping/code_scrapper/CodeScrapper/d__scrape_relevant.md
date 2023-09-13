## `_scrape_relevant() -> None`

#### Description:
This method performs the scraping of relevant code snippets from the abstract syntax tree (AST) of a file. It belongs to the class `CodeScrapper`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything (`None`).

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Example usage case
scrapper = CodeScrapper()
scrapper._scrape_relevant()
```

#### How it Works:
1. The method retrieves the relevant nodes from the AST using the `get_nodes()` function from the `tree_sitter_logic.tree_sitter_util` module.
2. For each relevant node, the method creates a `SnippetExtract` object by passing the node information and the file content.
3. Using the `SnippetExtract` object, the method creates a `CodeSnippet` object by passing the input file, the snippet extract, and the file dependencies.
4. The method saves the `CodeSnippet` by calling the `_save_code_snippet()` method.

#### Dependencies:
- `get_nodes()`: Retrieves the relevant nodes from the AST.
- `SnippetExtract`: Represents a snippet of code extracted from the file.
- `CodeSnippet`: Represents a complete code snippet with additional information.
- `_save_code_snippet()`: Saves the code snippet into a storage.