## `_update_snippets_to_delete() -> None`

#### Description:
This method updates the snippets to delete in the `SnippetStorage` object. It belongs to the class `ModifiedFilesManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything (`None`).

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
manager = ModifiedFilesManager()
manager._update_snippets_to_delete()
```

#### How it Works:
The method `_update_snippets_to_delete` is called internally within the `ModifiedFilesManager` class. It updates the snippets to delete in the `SnippetStorage` object by calling the `update_storage` method of the `snippets_to_delete` attribute. The `update_storage` method takes the `_old_deleted_snippets_dict` attribute as its argument.

#### Dependencies:
- `SnippetStorage`: Represents the storage for code snippets.
- `_old_deleted_snippets_dict`: A dictionary representing the old deleted snippets.