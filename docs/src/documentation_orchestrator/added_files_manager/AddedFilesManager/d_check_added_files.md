## `check_added_files() -> None`

#### Description:
This method performs an update of the snippets stored in the documentation. It belongs to the class 'AddedFilesManager' and is used for checking the added files.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
check_added_files()
```

#### How it Works:
This method calls the `_update_snippets_to_doc()` method of the `AddedFilesManager` instance to update the stored snippets to the documentation.

#### Dependencies:
- `AddedFilesManager`: The class to which this method belongs and is responsible for managing added files.