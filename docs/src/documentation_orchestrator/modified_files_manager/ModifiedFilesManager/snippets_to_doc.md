## `snippets_to_doc() -> None`

#### Description:
This method converts code snippets stored in the SnippetStorage to documentation format. It is used to generate documentation for the modified files. This method belongs to the class ModifiedFilesManager.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Sample code to demonstrate the use of snippets_to_doc method
modified_files_manager = ModifiedFilesManager()
modified_files_manager.snippets_to_doc()
```

#### How it Works:
This method simply calls the private method `_snippets_to_doc` to perform the conversion of code snippets to documentation format.

#### Dependencies:
- `SnippetStorage`: This class is used to store code snippets.
- This method does not have any other dependencies.