## `_ask_documentation()`

#### Description:
This method performs a chat interaction with the chat model and retrieves the response. It belongs to the class `DocumentorChat`.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not have a return value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Example usage
documentor_chat = DocumentorChat()
documentor_chat._ask_documentation()
```

#### How it Works:
The `_ask_documentation()` method uses the chat model to interact with it and retrieves the response. The current chat message is passed to the chat model, and the response is stored in the `current_answer` attribute of the `DocumentorChat` instance.

#### Dependencies:
- `chat` from `langchain.chat_models`: This method relies on the `chat` method from the `ChatOpenAI` class to perform the chat interaction.