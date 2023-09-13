## `_set_class_documentation() -> None`

#### Description:
This method sets the documentation templates for the class DocumentorChat. It sets the system message template, document message template, and the current chat message template.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Usage Cases:

```python
# Setting the class documentation templates
_set_class_documentation()
```

#### How it Works:
This method sets the templates for the system message, document message, and current chat message. It is called internally within the DocumentorChat class.

#### Dependencies:
- `SingletonMeta`: A metaclass that ensures only one instance of the class is created.
- `ChatOpenAI`: A class for interacting with the OpenAI chat model.
- `HumanMessage`: A class representing a human message in the chat.
- `SystemMessagePromptTemplate`: A template for system message prompts.
- `HumanMessagePromptTemplate`: A template for human message prompts.
- `ChatPromptTemplate`: A template for chat prompts.
- `PromptTemplate`: A base class for prompt templates.
- `CodeSnippet`: A class for managing code snippets.
- `CLASS_DOCUMENTATION_TEMPLATE`: A template for class documentation.
- `METHOD_DOCUMENTATION_TEMPLATE`: A template for method documentation.
- `FUNCTION_DOCUMENTATION_TEMPLATE`: A template for function documentation.
- `DEFAULT_DOCUMENTATION_TEMPLATE`: A default template for documentation.
