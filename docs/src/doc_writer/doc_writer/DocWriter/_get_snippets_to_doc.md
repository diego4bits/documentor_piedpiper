## `_get_snippets_to_doc() -> None`

#### Description:
This method retrieves the snippets to be documented from the `DocumentationManager` and assigns them to the `snippets_to_doc` attribute. This method belongs to the class `DocWriter`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Example usage of the _get_snippets_to_doc() method
doc_writer = DocWriter()
doc_writer._get_snippets_to_doc()
```

#### How it Works:
The `_get_snippets_to_doc()` method retrieves the snippets to be documented by calling the `get_snippets_to_doc()` method of the `DocumentationManager` class. It then assigns the retrieved snippets to the `snippets_to_doc` attribute of the `DocWriter` instance.

#### Dependencies:
- `DocumentationManager`: This method relies on the `DocumentationManager` class to retrieve the snippets to be documented.