## `_set_method_current_chat_message()`

#### Description:
This method sets the current chat message for the DocumentorChat class.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not have a return value.

#### Usage Cases:

```python
# Sample code to demonstrate the usage of '_set_method_current_chat_message'
documentor_chat = DocumentorChat()
documentor_chat._set_method_current_chat_message()
```

#### How it Works:
This method creates a chat template using the system message and the current document message. It then formats the chat template with the necessary information, such as the method identifier, class identifier, file name, file dependencies, method implementation, and method format. The resulting formatted prompt value is assigned to the current chat message property of the DocumentorChat class.

#### Dependencies:
- `ChatPromptTemplate`: A template for generating chat prompts.
- `self.system_message`: The system message for the chat.
- `self.current_doc_message`: The current document message for the chat.