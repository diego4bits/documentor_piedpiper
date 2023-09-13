## `_update_snippets_to_doc() -> None`

#### Description:
This method updates the storage of code snippets to be documented. It belongs to the class `ModifiedFilesManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Updating the snippets to be documented
manager = ModifiedFilesManager()
manager._update_snippets_to_doc()
```

#### How it Works:
The `_update_snippets_to_doc` method updates the storage of code snippets to be documented. It first calls the `update_storage` method of the `snippets_to_doc` object, passing the `_new_added_snippets_dict` dictionary as the parameter. Then, it calls the `update_storage` method again, this time passing the `_modified_snippets_dict` dictionary as the parameter.

#### Dependencies:
- `ModifiedFilesManager`: This method belongs to the `ModifiedFilesManager` class.
- `SnippetStorage`: This method relies on the `snippets_to_doc` object of type `SnippetStorage` to update the storage of code snippets.