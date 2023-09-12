## `_set_class_current_chat_message()`

#### Description:
This method sets the current chat message for the DocumentorChat class.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not have a return value.

#### Usage Cases:

```python
# Sample code to demonstrate how to set the current chat message
self._set_class_current_chat_message()
```

#### How it Works:
This method creates a chat template using the system message and the current document message. It then formats the chat template with the class identifier, file name, file dependencies, class implementation, and class format. The resulting formatted prompt is set as the value of the current chat message.

#### Dependencies:
- `ChatPromptTemplate`: This class is used to create the chat template.
- `ChatOpenAI`: This class is used to generate the prompt value.
- `SystemMessagePromptTemplate`: This class is used to create the system message template.
- `HumanMessagePromptTemplate`: This class is used to create the human message template.
- `PromptTemplate`: This class is used as a base class for other prompt templates.
- `CodeSnippet`: This class is used to access the code snippet information.
- `CLASS_DOCUMENTATION_TEMPLATE`: This constant stores the template for the class documentation.
- `METHOD_DOCUMENTATION_TEMPLATE`: This constant stores the template for the method documentation.
- `FUNCTION_DOCUMENTATION_TEMPLATE`: This constant stores the template for the function documentation.
- `HumanMessage`: This class is used to represent a human message.
- `SingletonMeta`: This metaclass is used to create a singleton instance of the DocumentorChat class.