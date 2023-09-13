## `_set_function_doc_message_template() -> None`

#### Description:
This method sets the template for documenting a function. It creates a prompt template that includes the implementation of the function and instructs the user to analyze the logic, arguments, return type, etc., in order to provide a comprehensive documentation. The method then assigns the prompt template to the `current_doc_message` attribute of the class.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Example usage of the _set_function_doc_message_template method
documentor = DocumentorChat()
documentor._set_function_doc_message_template()
```

#### How it Works:
The method creates a `PromptTemplate` object using the provided template string. It includes placeholders for the function identifier and implementation. The prompt instructs the user to analyze the function and document it accordingly. The `PromptTemplate` object is then used to create a `HumanMessagePromptTemplate` object, which is assigned to the `current_doc_message` attribute of the class.

#### Dependencies:
This method depends on the following classes and modules:
- `PromptTemplate` from `langchain.prompts`
- `HumanMessagePromptTemplate` from `langchain.prompts`