## `_update_snippets_to_doc()`

#### Description:
This method updates the snippets to be documented by adding the snippets from added files and modified files. This method belongs to the class `DocumentationManager`.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not have a return value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate how to use this method
manager = DocumentationManager()
manager._update_snippets_to_doc()
```

#### How it Works:
This method first retrieves the snippets from added files using the `AddedFilesManager.get_snippets_to_doc()` method and stores them in a dictionary called `added_file_snippets_dict`. Then, it updates the storage of the `_snippets_to_doc` object by adding the snippets from `added_file_snippets_dict`. Next, it retrieves the snippets from modified files using the `ModifiedFilesManager.get_snippets_to_doc()` method and stores them in a dictionary called `modified_file_snippets_dict`. Finally, it updates the storage of the `_snippets_to_doc` object by adding the snippets from `modified_file_snippets_dict`.

#### Dependencies:
- `AddedFilesManager`: This class is responsible for managing the snippets from added files.
- `ModifiedFilesManager`: This class is responsible for managing the snippets from modified files.
- `SnippetStorage`: This class is responsible for storing and updating the snippets to be documented.