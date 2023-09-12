## `_update_snippets_to_doc_first_run()`

#### Description:
This method updates the snippets to be documented in the first run. It belongs to the class `DocumentationManager`.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Example usage case
documentation_manager._update_snippets_to_doc_first_run()
```

#### How it Works:
This method retrieves all the snippets to be documented from the `FirstRunManager` and updates the storage of snippets to be documented in the `DocumentationManager`.

#### Dependencies:
- `FirstRunManager`: Manages the snippets to be documented in the first run.