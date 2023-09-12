## `get_snippets_to_doc() -> SnippetStorage`

#### Description:
This method returns the `_snippets_to_doc` attribute from the `FirstRunManager` class. It is used to retrieve the `SnippetStorage` object that contains snippets to be documented. This method belongs to the class `FirstRunManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
- `SnippetStorage`: The `SnippetStorage` object that contains snippets to be documented.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Retrieve the SnippetStorage object with snippets to be documented
snippets = get_snippets_to_doc()
print(snippets)
```

#### How it Works:

This method simply returns the `_snippets_to_doc` attribute from the `FirstRunManager` class, which is an instance of the `SnippetStorage` class. It provides access to the snippets that need to be documented.

#### Dependencies:
This method does not have any dependencies.