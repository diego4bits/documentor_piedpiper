## `_set_class_doc_message_template() -> None`

#### Description:
This method sets the template for documenting a class. It takes in the class identifier and implementation and generates a prompt template for documenting the class. This method belongs to the class `DocumentorChat`.

#### Parameters:
- `class_identifier` (`str`): The identifier of the class.
- `class_implementation` (`str`): The implementation code of the class.

#### Returns:
- `None`: This method does not return any value.

#### Usage Cases:

```python
# Example usage of _set_class_doc_message_template()
self._set_class_doc_message_template()
```

#### How it Works:
This method creates a prompt template for documenting a class. It takes the class identifier and implementation as input variables and generates a prompt template using the provided information.

#### Dependencies:
- `PromptTemplate`: This class is imported from `langchain.prompts` and is used to create a template for documenting a class.
- `HumanMessagePromptTemplate`: This class is imported from `langchain.prompts` and is used to create a human message prompt template.