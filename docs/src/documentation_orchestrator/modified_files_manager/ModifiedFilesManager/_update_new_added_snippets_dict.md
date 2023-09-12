## `_update_new_added_snippets_dict() -> None`

#### Description:
This method updates the `_new_added_snippets_dict` attribute of the `ModifiedFilesManager` class with the snippets that have been added to the front file scrapper but not to the tail file scrapper.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return anything.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
modified_files_manager = ModifiedFilesManager()
modified_files_manager._update_new_added_snippets_dict()
```

#### How it Works:
1. Retrieve the keys of the snippets stored in the front file scrapper.
2. Retrieve the keys of the snippets stored in the tail file scrapper.
3. Calculate the set difference between the front snippets keys and the tail snippets keys to get the keys of the added snippets.
4. Create a dictionary of the added snippets using their hash integer as the key and the snippet as the value.
5. Update the `_new_added_snippets_dict` attribute with the created dictionary.

#### Dependencies:
- `FileScrapper`: Used to access the storage dictionaries of the front and tail file scrappers.