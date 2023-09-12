## `_update_snippets_to_doc()`

#### Description:
This method updates the storage of snippets to be documented in the DocumentationManager class. It retrieves the snippets from the AddedFilesManager and ModifiedFilesManager classes, and updates the storage in the SnippetStorage class. The method belongs to the class DocumentationManager.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not have a return value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to update the snippets to be documented
manager = DocumentationManager()
manager._update_snippets_to_doc()
```

#### How it Works:
The method retrieves the snippets from the AddedFilesManager class using the get_snippets_to_doc() method and stores them in the added_file_snippets_dict variable. Then, it updates the storage in the SnippetStorage class by calling the update_storage() method with the added_file_snippets_dict as the parameter. Next, it retrieves the snippets from the ModifiedFilesManager class using the get_snippets_to_doc() method and stores them in the modified_file_snippets_dict variable. Finally, it updates the storage in the SnippetStorage class by calling the update_storage() method with the modified_file_snippets_dict as the parameter.

#### Dependencies:
- AddedFilesManager: Manages the added files and retrieves the snippets to be documented.
- ModifiedFilesManager: Manages the modified files and retrieves the snippets to be documented.
- SnippetStorage: Stores the snippets to be documented.