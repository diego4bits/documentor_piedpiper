## `_set_function_documentation() -> None`

#### Description:
This method is used to set the function documentation for the DocumentorChat class.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Setting the function documentation
_set_function_documentation()
```

#### How it Works:
This method calls three other methods to set the function documentation for the DocumentorChat class. The three methods called are `_set_function_system_message_template()`, `_set_function_doc_message_template()`, and `_set_function_current_chat_message()`.

#### Dependencies:
This method has the following dependencies:
- `SingletonMeta`: Provides the Singleton pattern implementation.
- `ChatOpenAI`: Represents the chat model for OpenAI.
- `HumanMessage`: Represents a human message in the chat.
- `SystemMessagePromptTemplate`: Represents the template for a system message prompt.
- `HumanMessagePromptTemplate`: Represents the template for a human message prompt.
- `ChatPromptTemplate`: Represents the template for a chat prompt.
- `PromptTemplate`: Represents the template for a prompt.
- `CodeSnippet`: Represents a code snippet.
- `CLASS_DOCUMENTATION_TEMPLATE`: Represents the template for class documentation.
- `METHOD_DOCUMENTATION_TEMPLATE`: Represents the template for method documentation.
- `FUNCTION_DOCUMENTATION_TEMPLATE`: Represents the template for function documentation.
- `DEFAULT_DOCUMENTATION_TEMPLATE`: Represents the default template for documentation.