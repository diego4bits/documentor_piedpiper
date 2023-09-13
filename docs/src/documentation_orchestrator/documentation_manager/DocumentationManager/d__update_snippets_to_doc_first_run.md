## `_update_snippets_to_doc_first_run()`

#### Description:
This method updates the storage of snippets to be documented in the first run. It belongs to the class DocumentationManager.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to update snippets to be documented in the first run
documentation_manager = DocumentationManager()
documentation_manager._update_snippets_to_doc_first_run()
```

#### How it Works:
The method retrieves all the snippets to be documented from the `FirstRunManager` and updates the storage of the `_snippets_to_doc` attribute with these snippets.

#### Dependencies:
- `FirstRunManager`: Manages the first run of the documentation process and provides access to the snippets to be documented.
- `SnippetStorage`: Storage for the snippets to be documented.