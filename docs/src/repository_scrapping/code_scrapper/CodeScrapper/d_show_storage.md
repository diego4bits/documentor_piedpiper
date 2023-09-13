## `show_storage() -> None`

#### Description:
This method displays the contents of the snippet storage. It is used to view the stored code snippets. This method belongs to the class `CodeScrapper`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Example of how to use the show_storage method
code_scrapper = CodeScrapper()
code_scrapper.show_storage()
```

#### How it Works:
The `show_storage` method calls the `show_storage` method of the `_snippet_storage` object. This method displays the stored code snippets on the console.

#### Dependencies:
- `SnippetStorage`: Stores and manages the code snippets.
- `CodeSnippet`: Represents a code snippet.
- `SnippetExtract`: Extracts code snippets from source files.
- `FileExtension`: Represents a file extension.
- `LanguageNodes`: Represents the nodes of a programming language.
- `get_specified_nodes`: Retrieves specified nodes from a syntax tree.
- `global_node_types`: Represents global node types.
- `get_nodes`: Retrieves nodes from a syntax tree.
- `FileHandler`: Handles file-related operations.
- `Parser`: Parses source code.
- `Node`: Represents a node in a syntax tree.
- `DependenciesInfo`: Provides information about the dependencies of a code snippet.