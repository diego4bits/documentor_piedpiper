## `_update_parser() -> None`

#### Description:
This method updates the parser language based on the file extension of the input file. It belongs to the class `CodeScrapper`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
scraper = CodeScrapper()
scraper._update_parser()
```

#### How it Works:
The method retrieves the file extension of the input file and maps it to the corresponding `FileExtension` enum value. Then, it sets the language of the parser to the retrieved value.

#### Dependencies:
- `FileExtension`: Enum that maps file extensions to language values.