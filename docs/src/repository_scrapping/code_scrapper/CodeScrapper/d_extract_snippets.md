## `extract_snippets() -> bool`

#### Description:
This method performs the extraction of code snippets from a given input file. It is used to scrape relevant code snippets and assignment code snippets. This method belongs to the class CodeScrapper.

#### Returns:
- `bool`: Returns True if the extraction process is successful.

#### Exceptions:
- `Exception`: This exception is raised if no file has been charged.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
code_scrapper = CodeScrapper()
code_scrapper.extract_snippets()

# Another use case (if applicable)
code_scrapper = CodeScrapper()
code_scrapper.extract_snippets()
```

#### How it Works:

This method first checks if an input file has been charged. If no file has been charged, it raises an exception. Then, it proceeds to scrape relevant code snippets and assignment code snippets. Finally, it returns True to indicate the success of the extraction process.

#### Dependencies:
- `CodeSnippet`: Represents a code snippet.
- `SnippetExtract`: Represents a snippet extract.
- `SnippetStorage`: Manages the storage of code snippets.
- `FileExtension`: Represents a file extension.
- `LanguageNodes`: Represents the nodes of a language.
- `get_specified_nodes`: Retrieves specified nodes from a tree-sitter parser.
- `global_node_types`: Retrieves global node types from a tree-sitter parser.
- `get_nodes`: Retrieves nodes from a tree-sitter parser.
- `FileHandler`: Handles file operations.
- `Parser`: Represents a tree-sitter parser.
- `Node`: Represents a node in a tree-sitter parse tree.
- `DependenciesInfo`: Provides information about dependencies.