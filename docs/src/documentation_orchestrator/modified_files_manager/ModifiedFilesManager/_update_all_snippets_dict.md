## `_update_all_snippets_dict() -> None`

#### Description:
This method updates the dictionary of all code snippets. It is used for updating the dictionaries of new added snippets, old deleted snippets, and modified snippets. This method belongs to the class `ModifiedFilesManager` in the file `modified_files_manager.py`.

#### Parameters:
This method does not take any parameters.

#### Returns:
- `None`: This method does not return any value.

#### Usage Cases:

```python
# Updating all snippets dictionary
manager = ModifiedFilesManager()
manager._update_all_snippets_dict()
```

#### How it Works:
This method calls three private methods sequentially to update the dictionaries of new added snippets, old deleted snippets, and modified snippets.

#### Dependencies:
- `ModifiedFilesManager`: The class to which this method belongs.
- `self._update_new_added_snippets_dict()`: A private method of `ModifiedFilesManager` class used to update the dictionary of new added snippets.
- `self._update_old_deleted_snippets_dict()`: A private method of `ModifiedFilesManager` class used to update the dictionary of old deleted snippets.
- `self._update_modified_snippets_dict()`: A private method of `ModifiedFilesManager` class used to update the dictionary of modified snippets.