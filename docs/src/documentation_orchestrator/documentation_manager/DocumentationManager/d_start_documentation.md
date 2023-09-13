## `start_documentation() -> None`

#### Description:
This method is used to start the documentation process. It checks if a documentation log exists and either runs the first diagnosis or continues with the regular diagnosis.

#### Parameters:
This method does not have any parameters.

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

If a documentation log does not exist, the method calls the `_run_first_diagnosis()` method of the `DocumentationManager` class. Otherwise, it calls the `_run_diagnosis()` method of the `DocumentationManager` class.

#### Dependencies:
- `DocLog`: This class is responsible for managing the documentation log and checking its existence.