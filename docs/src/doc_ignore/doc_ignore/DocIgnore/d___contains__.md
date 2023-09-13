## `__contains__(self, sys_object: str) -> bool`

#### Description:
This method checks if a given `sys_object` is present in the `ignore` attribute of the `DocIgnore` class. This method belongs to the class `DocIgnore`.

#### Parameters:
- `sys_object` (`str`): The system object to be checked.

#### Returns:
- `bool`: Returns `True` if the `sys_object` is present in the `ignore` attribute, otherwise returns `False`.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
doc_ignore = DocIgnore()
doc_ignore.ignore = ['object1', 'object2', 'object3']

result_case1 = 'object1' in doc_ignore
print(result_case1)  # Output: True

result_case2 = 'object4' in doc_ignore
print(result_case2)  # Output: False
```

#### How it Works:
The method checks if the `sys_object` is present in the `ignore` attribute by using the `in` operator.

#### Dependencies:
- This method does not have any dependencies.