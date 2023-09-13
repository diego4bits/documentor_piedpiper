## `__call__(cls, *args, **kwargs)`

#### Description:
This method raises a `TypeError` with a message indicating that the class is not instanciable. This method belongs to the class `NoInstanciable`.

#### Parameters:
- `cls` (`type`): The class object that is being called.

#### Returns:
This method does not return any value.

#### Exceptions:
- `TypeError`: This exception is thrown when the class is attempted to be instantiated.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
try:
    NoInstanciable()  # trying to create an instance of the class
except TypeError as e:
    print(e)  # output: Class 'NoInstanciable' is not instanciable.
```

#### How it Works:
The `__call__` method is a special method that gets called when an instance of the class is called as a function. In this case, the method raises a `TypeError` with a message indicating that the class is not instanciable. This prevents the class from being instantiated.

#### Dependencies:
This method does not have any dependencies.