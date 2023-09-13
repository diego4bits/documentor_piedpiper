## `show_results() -> None`

#### Description:
This method displays the snippets to documentate and the snippets to delete. This method belongs to the class DocumentationManager.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate the use of show_results()
show_results()
```

#### How it Works:
The method displays the snippets to documentate by calling the `show_storage()` method of the `snippets_to_doc` object returned by the `get_snippets_to_doc()` method of the DocumentationManager class. It then displays the snippets to delete by calling the `show_storage()` method of the `snippets_to_delete` object returned by the `get_snippets_to_delete()` method of the DocumentationManager class.

#### Dependencies:
- `DocumentationManager.get_snippets_to_doc()`: Returns the `snippets_to_doc` object.
- `DocumentationManager.get_snippets_to_delete()`: Returns the `snippets_to_delete` object.
- `snippets_to_doc.show_storage()`: Displays the snippets to documentate.
- `snippets_to_delete.show_storage()`: Displays the snippets to delete.