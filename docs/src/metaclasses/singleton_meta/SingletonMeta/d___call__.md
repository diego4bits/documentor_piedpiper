## `__call__(cls, *args, **kwargs) -> Any`

#### Description:
This method creates and returns a singleton instance of a class. It ensures that only one instance of the class exists and returns the same instance every time it is called. This method belongs to the class `SingletonMeta`.

#### Parameters:
- `cls` (`type`): The class object that is being instantiated.
- `*args` (`Any`): Variable-length argument list.
- `**kwargs` (`Any`): Arbitrary keyword arguments.

#### Returns:
- `Any`: The singleton instance of the class.

#### Usage Cases:

```python
class MyClass(metaclass=SingletonMeta):
    def __init__(self, name):
        self.name = name

instance1 = MyClass("Instance 1")
print(instance1.name)  # Output: "Instance 1"

instance2 = MyClass("Instance 2")
print(instance2.name)  # Output: "Instance 1"
```

#### How it Works:
The `__call__` method checks if the class `cls` is already present in the `_instances` dictionary attribute of the class `SingletonMeta`. If it is not present, it creates a new instance of the class by calling the `super().__call__(*args, **kwargs)` method. It then assigns the new instance to the `_instances` dictionary and also assigns it to the `instance` attribute of the class `cls`. Finally, it returns the singleton instance from the `_instances` dictionary.

This way, every time the class is called, it returns the same instance that was created the first time.

#### Dependencies:
- This method does not have any dependencies.