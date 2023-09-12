## `_update_snippets_to_delete() -> None`

#### Description:
This method updates the storage of code snippets to be deleted with a dictionary of old deleted snippets. This method belongs to the class 'ModifiedFilesManager'.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
manager = ModifiedFilesManager()
manager._update_snippets_to_delete()
```

#### How it Works:
This method updates the 'snippets_to_delete' storage by calling the 'update_storage' method on the 'snippets_to_delete' object. The new snippets to be deleted are provided as a dictionary named '_old_deleted_snippets_dict'.

#### Dependencies:
- `ModifiedFilesManager`: This method belongs to the 'ModifiedFilesManager' class.