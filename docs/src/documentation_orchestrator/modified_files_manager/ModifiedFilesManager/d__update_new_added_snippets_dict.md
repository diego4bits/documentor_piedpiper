## `_update_new_added_snippets_dict() -> None`

#### Description:
This method updates the `_new_added_snippets_dict` attribute of the `ModifiedFilesManager` class with the snippets that have been added to the file scrappers. It compares the keys of the `storage_dict` attributes of the `FileScrapper` instances (`_file_scrapper_front` and `_file_scrapper_tail`) and selects the snippets that are present in `_file_scrapper_front` but not in `_file_scrapper_tail`. It then assigns the selected snippets to the `_new_added_snippets_dict` attribute.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
modified_files_manager = ModifiedFilesManager()
modified_files_manager._update_new_added_snippets_dict()
```

#### How it Works:
1. Retrieve the keys from the `storage_dict` attribute of `_file_scrapper_front` and assign them to `front_snippets_keys`.
2. Retrieve the keys from the `storage_dict` attribute of `_file_scrapper_tail` and assign them to `tail_snippets_keys`.
3. Calculate the difference between `front_snippets_keys` and `tail_snippets_keys` and assign the result to `added_snippets_hash_ints`.
4. Create a dictionary `added_snippets_dict` using a dictionary comprehension, iterating over the items of `_file_scrapper_front.storage_dict`. Only the items with keys present in `added_snippets_hash_ints` are selected.
5. Assign `added_snippets_dict` to the `_new_added_snippets_dict` attribute.

#### Dependencies:
- `FileScrapper`: This class is imported from the module `repository_scrapping.file_scrapper` and is used to retrieve the snippets' storage dictionaries.
- `ModifiedFilesManager`: This class is imported from the module `modified_files_manager` and is the class that owns the `_update_new_added_snippets_dict` method.