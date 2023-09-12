## `__contains__(sys_object: str) -> bool`

#### Description:
This method checks if a given `sys_object` is present in the `ignore` attribute of the `DocIgnore` class. It is used to determine whether a specific system object should be ignored or not. This method belongs to the class `DocIgnore`.

#### Parameters:
- `sys_object` (`str`): The system object to be checked for presence in the `ignore` attribute.

#### Returns:
- `bool`: Returns `True` if the `sys_object` is found in the `ignore` attribute, otherwise returns `False`.

#### Usage Cases:

```python
doc_ignore = DocIgnore()
doc_ignore.ignore = ['obj1', 'obj2', 'obj3']

# Check if 'obj2' is ignored
result_case1 = 'obj2' in doc_ignore
print(result_case1)  # Output: True

# Check if 'obj4' is ignored
result_case2 = 'obj4' in doc_ignore
print(result_case2)  # Output: False
```

#### How it Works:
The method uses the `in` operator to check if the `sys_object` is present in the `ignore` attribute of the `DocIgnore` class. It returns `True` if the `sys_object` is found in the `ignore` attribute, otherwise it returns `False`.

#### Dependencies:
- This method does not have any dependencies.