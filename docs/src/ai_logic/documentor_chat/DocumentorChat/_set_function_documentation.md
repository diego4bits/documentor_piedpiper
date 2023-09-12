## `_set_function_documentation() -> None`

#### Description:
This method is used to set the function documentation for the DocumentorChat class.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Example usage of the method
documentor_chat = DocumentorChat()
documentor_chat._set_function_documentation()
```

#### How it Works:
This method sets the function documentation for the DocumentorChat class by calling three other methods: `_set_function_system_message_template()`, `_set_function_doc_message_template()`, and `_set_function_current_chat_message()`.

#### Dependencies:
- `DocumentorChat`: The class to which this method belongs.
- `self._set_function_system_message_template()`: Sets the function system message template.
- `self._set_function_doc_message_template()`: Sets the function doc message template.
- `self._set_function_current_chat_message()`: Sets the function current chat message.