## `_update_parser() -> None`

#### Description:
This method updates the parser's language based on the file extension of the input file. It belongs to the class `CodeScrapper`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
scrapper = CodeScrapper()
scrapper._update_parser()
```

#### How it Works:
The `_update_parser()` method retrieves the file extension of the input file and assigns the corresponding language to the parser. The language is determined using the `FileExtension` enum. The parser's language is then updated using the `set_language()` method.

#### Dependencies:
- `FileExtension`: Enum that maps file extensions to language values.