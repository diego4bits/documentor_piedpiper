## `_update_ast_root() -> None`

#### Description:
This method updates the abstract syntax tree (AST) root node of the CodeScrapper instance. It is used to parse the input file and set the AST root node accordingly. This method belongs to the class CodeScrapper.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
scrapper = CodeScrapper()
scrapper._update_ast_root()
```

#### How it Works:
The method uses the `_parser` attribute of the CodeScrapper instance to parse the input file. It converts the file content to bytes using the UTF-8 encoding and passes it to the `_parser.parse()` method. The resulting tree object is assigned to the `_ast_root` attribute of the CodeScrapper instance.

#### Dependencies:
- `Parser` (from tree_sitter): Used to parse the input file and generate the AST.
- `Node` (from tree_sitter): Represents a node in the AST.