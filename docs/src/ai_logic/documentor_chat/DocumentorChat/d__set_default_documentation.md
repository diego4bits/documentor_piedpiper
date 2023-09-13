## `_set_default_documentation() -> None`

#### Description:
This method sets the default documentation for the DocumentorChat class. It initializes the default system message template, default documentation message template, and default current chat message.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return anything.

#### Usage Cases:

```python
# Example usage of the method
chat = DocumentorChat()
chat._set_default_documentation()
```

#### How it Works:
This method initializes the default system message template, default documentation message template, and default current chat message for the DocumentorChat class.

#### Dependencies:
- `self._set_default_system_message_template()`: Initializes the default system message template.
- `self._set_default_doc_message_template()`: Initializes the default documentation message template.
- `self._set_default_current_chat_message()`: Initializes the default current chat message.