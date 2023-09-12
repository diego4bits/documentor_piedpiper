## `_set_function_doc_message_template() -> None`

#### Description:
This method sets the template for documenting a function. It takes into account the function identifier and implementation and generates a prompt template for documenting the function. This method belongs to the class `DocumentorChat`.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not have a return value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
documentor = DocumentorChat()
documentor._set_function_doc_message_template()
```

#### How it Works:
The `_set_function_doc_message_template()` method creates a `PromptTemplate` object using the provided function identifier and implementation. It then sets this template as the `current_doc_message` of the `DocumentorChat` instance.

#### Dependencies:
- `PromptTemplate`: This class is imported from `langchain.prompts` and is used to create the prompt template.