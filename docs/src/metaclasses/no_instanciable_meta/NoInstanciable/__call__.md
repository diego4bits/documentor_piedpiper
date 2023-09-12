## `__call__(cls, *args, **kwargs)`

#### Description:
This method raises a TypeError indicating that the class is not instantiable. It is used to prevent the instantiation of the class. This method belongs to the class NoInstanciable.

#### Parameters:
- `cls` (`type`): The class object that is being called.

#### Returns:
- This method does not return any value.

#### Exceptions:
- `TypeError`: This exception is raised when the class is called.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
try:
    NoInstanciable()
except TypeError as e:
    print(e)
```

#### How it Works:
When the class NoInstanciable is called, this method is automatically invoked. It raises a TypeError with a message indicating that the class is not instantiable.

#### Dependencies:
This method does not have any dependencies.