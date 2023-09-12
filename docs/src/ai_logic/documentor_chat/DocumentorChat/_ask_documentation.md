## `_ask_documentation()`

#### Description:
This method is used to ask for documentation by interacting with the chat model. It sends the current chat message to the chat model and stores the response in the `current_answer` attribute. This method belongs to the class `DocumentorChat`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Sample code to demonstrate the usage of the _ask_documentation() method
documentor = DocumentorChat()
documentor.current_chat_message = "How does this method work?"
documentor._ask_documentation()
print(documentor.current_answer)
```

#### How it Works:
The `_ask_documentation()` method uses the `chat` method of the chat model to interact with the AI. It sends the `current_chat_message` as input to the chat model and stores the response in the `current_answer` attribute.

#### Dependencies:
- `chat` method from the `ChatOpenAI` class: This method is used to interact with the chat model and get the response to the current chat message.