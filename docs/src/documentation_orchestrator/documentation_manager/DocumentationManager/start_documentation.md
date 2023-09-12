## `start_documentation() -> None`

#### Description:
This method is used to start the documentation process. It checks if a document log exists and runs the appropriate diagnosis method accordingly.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Start the documentation process
start_documentation()
```

#### How it Works:
- If a document log does not exist, it calls the `_run_first_diagnosis()` method to perform the first diagnosis.
- If a document log exists, it calls the `_run_diagnosis()` method to perform the diagnosis.

#### Dependencies:
- `DocLog`: This class is used to check if a document log exists.