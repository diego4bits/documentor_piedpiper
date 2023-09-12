## `_set_class_documentation() -> None`

#### Description:
This method sets the documentation templates for system messages, doc messages, and current chat messages. This method belongs to the class `DocumentorChat`.

#### Parameters:
This method does not accept any parameters.

#### Returns:
This method does not return anything.

#### Usage Cases:

```python
# Setting the class documentation templates
_set_class_documentation()
```

#### How it Works:
The `_set_class_documentation()` method is responsible for setting the documentation templates for system messages, doc messages, and current chat messages. It initializes the templates required for documenting the class.

#### Dependencies:
- `self._set_class_system_message_template()`: Sets the documentation template for system messages.
- `self._set_class_doc_message_template()`: Sets the documentation template for doc messages.
- `self._set_class_current_chat_message()`: Sets the documentation template for current chat messages.