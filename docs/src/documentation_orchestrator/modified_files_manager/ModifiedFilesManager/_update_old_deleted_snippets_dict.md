## `_update_old_deleted_snippets_dict() -> None`

#### Description:
This method updates the `_old_deleted_snippets_dict` attribute of the `ModifiedFilesManager` class. It compares the keys of two dictionaries (`self._file_scrapper_front.storage_dict` and `self._file_scrapper_tail.storage_dict`) and finds the keys that are present in `self._file_scrapper_tail.storage_dict` but not in `self._file_scrapper_front.storage_dict`. It then creates a new dictionary (`deleted_snippets_dict`) using these keys as the keys and the corresponding snippets from `self._file_scrapper_tail.storage_dict` as the values. Finally, it assigns this new dictionary to the `_old_deleted_snippets_dict` attribute.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Dependencies:
- `self._file_scrapper_front` (Instance of `FileScrapper`): The `FileScrapper` instance that contains the front snippets.
- `self._file_scrapper_tail` (Instance of `FileScrapper`): The `FileScrapper` instance that contains the tail snippets.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
modified_files_manager = ModifiedFilesManager()
modified_files_manager._update_old_deleted_snippets_dict()
```

#### How it Works:
1. Get the keys of the front snippets dictionary (`self._file_scrapper_front.storage_dict`) and store them in the `front_snippets_keys` set.
2. Get the keys of the tail snippets dictionary (`self._file_scrapper_tail.storage_dict`) and store them in the `tail_snippets_keys` set.
3. Find the keys that are present in `tail_snippets_keys` but not in `front_snippets_keys` by subtracting `front_snippets_keys` from `tail_snippets_keys`. Store these keys in the `deleted_snippets_hash_ints` set.
4. Create a new dictionary (`deleted_snippets_dict`) by iterating over the key-value pairs of `self._file_scrapper_tail.storage_dict` and including only the pairs where the key is in `deleted_snippets_hash_ints`.
5. Assign the `deleted_snippets_dict` to the `_old_deleted_snippets_dict` attribute of the `ModifiedFilesManager` class.