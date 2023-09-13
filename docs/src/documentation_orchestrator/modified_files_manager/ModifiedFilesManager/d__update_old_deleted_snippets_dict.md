## `_update_old_deleted_snippets_dict() -> None`

#### Description:
This method updates the `_old_deleted_snippets_dict` attribute of the `ModifiedFilesManager` class with the snippets that were deleted between the front and tail versions of a file. 

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return anything.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
manager = ModifiedFilesManager()
manager._update_old_deleted_snippets_dict()
```

#### How it Works:
1. Get the keys of the snippets in the front and tail versions of the file.
2. Calculate the hash integers of the snippets that are present in the tail version but not in the front version.
3. Create a dictionary of the deleted snippets, where the keys are the hash integers and the values are the snippets themselves.
4. Update the `_old_deleted_snippets_dict` attribute of the `ModifiedFilesManager` instance with the newly created dictionary.

#### Dependencies:
- `ModifiedFilesManager`: This method belongs to the `ModifiedFilesManager` class.
- `_file_scrapper_front`: An instance of `FileScrapper` class representing the front version of the file.
- `_file_scrapper_tail`: An instance of `FileScrapper` class representing the tail version of the file.