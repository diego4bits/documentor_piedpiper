## `get_snippets_to_doc() -> SnippetStorage`

#### Description:
This method retrieves the snippets to be documented. It is used to get the SnippetStorage object containing the snippets that need to be documented. This method belongs to the class ModifiedFilesManager.

#### Parameters:
This method does not have any parameters.

#### Returns:
- `SnippetStorage`: The SnippetStorage object containing the snippets that need to be documented.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Get the snippets to be documented
snippets_to_doc = get_snippets_to_doc()
```

#### How it Works:
This method simply returns the SnippetStorage object that contains the snippets to be documented. It retrieves the object from the instance of the ModifiedFilesManager class.

#### Dependencies:
- `ModifiedFilesManager`: The class to which this method belongs. It manages the modified files and retrieves the snippets to be documented.