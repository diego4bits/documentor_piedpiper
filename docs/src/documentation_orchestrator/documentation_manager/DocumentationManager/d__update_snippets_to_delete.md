## `_update_snippets_to_delete()`

#### Description:
This method updates the list of snippets to delete. It retrieves the snippets to delete from the `ModifiedFilesManager` and updates the storage of the `DocumentationManager` instance. This method belongs to the class `DocumentationManager`.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Example usage of the method
documentation_manager._update_snippets_to_delete()
```

#### How it Works:
- The method retrieves the snippets to delete from the `ModifiedFilesManager` using the `get_snippets_to_delete()` method.
- The snippets to delete are stored in a dictionary format.
- The method updates the storage of the `DocumentationManager` instance with the retrieved snippets to delete.

#### Dependencies:
- `ModifiedFilesManager`: Manages the modified files and their associated snippets.
- `DocumentationManager`: Manages the documentation related operations.
- `SnippetStorage`: Stores the snippets to delete.