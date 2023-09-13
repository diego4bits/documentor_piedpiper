## `_set_method_current_chat_message()`

#### Description:
This method sets the current chat message for the DocumentorChat class.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not have a return value.

#### Usage Cases:

```python
# Sample usage case
documentor_chat._set_method_current_chat_message()
```

#### How it Works:

This method creates a chat template using the system message and the current document message. It then formats the chat template with the necessary information including the code snippet identifier, parent identifier, file name, file dependencies, method implementation, and method format. The result is assigned to the current chat message property of the DocumentorChat instance.