## `_update_snippets_to_delete()`

#### Description:
This method updates the storage of snippets to delete. It belongs to the class `DocumentationManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample usage of the method
documentation_manager._update_snippets_to_delete()
```

#### How it Works:
This method retrieves the storage of snippets to delete from the `ModifiedFilesManager` and updates the storage of snippets to delete in the `DocumentationManager` by merging the retrieved storage with the existing storage.

#### Dependencies:
- `ModifiedFilesManager`: Manages the modified files and their associated snippets.
- `SnippetStorage`: Stores the snippets to delete.