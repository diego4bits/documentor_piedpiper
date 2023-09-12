## `_update_snippets_to_doc() -> None`

#### Description:
This method updates the snippet storage with new added and modified code snippets. This method belongs to the class ModifiedFilesManager.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
manager = ModifiedFilesManager()
manager._update_snippets_to_doc()
```

#### How it Works:
The `_update_snippets_to_doc` method updates the snippet storage by calling the `update_storage` method from the `SnippetStorage` class twice. First, it updates the storage with the `_new_added_snippets_dict` dictionary, which contains the newly added code snippets. Then, it updates the storage with the `_modified_snippets_dict` dictionary, which contains the modified code snippets.

#### Dependencies:
- `SnippetStorage`: This class is responsible for managing and updating the code snippets storage.