## `_get_snippets_to_doc() -> None`

#### Description:
This method assigns the value of `DocumentationManager.get_snippets_to_doc().storage` to the `self.snippets_to_doc` attribute. It is used to retrieve the snippets to be documented. This method belongs to the class `DocWriter`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Usage case 1: Assign the snippets to be documented to the 'snippets_to_doc' attribute
_get_snippets_to_doc()
```

#### How it Works:
This method retrieves the snippets to be documented from the `DocumentationManager` class using the `get_snippets_to_doc()` method. It then assigns the retrieved snippets to the `self.snippets_to_doc` attribute.

#### Dependencies:
- `DocumentationManager`: Manages the documentation process and provides access to the snippets to be documented.