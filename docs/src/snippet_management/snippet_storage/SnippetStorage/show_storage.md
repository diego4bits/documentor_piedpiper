## `show_storage() -> None`

#### Description:
This method prints the contents of the storage. It belongs to the class `SnippetStorage`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Print the contents of the storage
show_storage()
```

#### How it Works:
This method iterates over the key-value pairs in the `_storage` dictionary attribute of the `SnippetStorage` class. It then prints each key-value pair in the format: `key: value`.

#### Dependencies:
- `SnippetStorage`: The class to which this method belongs.
- `self._storage`: The dictionary attribute that contains the storage data.