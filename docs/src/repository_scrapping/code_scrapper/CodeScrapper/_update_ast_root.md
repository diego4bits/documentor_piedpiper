## `_update_ast_root() -> None`

#### Description:
This method updates the abstract syntax tree (AST) root node. It belongs to the class `CodeScrapper`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
code_scrapper = CodeScrapper()
code_scrapper._update_ast_root()
```

#### How it Works:
The `_update_ast_root` method uses the `_parser` attribute to parse the content of the input file and obtain the AST. It then assigns the root node of the AST to the `_ast_root` attribute.

#### Dependencies:
- `Parser`: A dependency used to parse the content of the input file and obtain the AST.