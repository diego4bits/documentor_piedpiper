## `snippets_to_delete() -> None`

#### Description:
This method returns the value of the private attribute `_snippets_to_delete` and is used to get a list of snippets that need to be deleted. This method belongs to the class `ModifiedFilesManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
- `None`: This method returns the value of the private attribute `_snippets_to_delete`.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
manager = ModifiedFilesManager()
snippets = manager.snippets_to_delete()
print(snippets)
```

#### How it Works:
The method `snippets_to_delete` simply returns the value of the private attribute `_snippets_to_delete`. This attribute is set by other methods in the `ModifiedFilesManager` class. 

#### Dependencies:
- This method does not have any dependencies.