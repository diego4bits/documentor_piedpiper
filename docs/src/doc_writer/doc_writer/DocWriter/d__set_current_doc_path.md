## `_set_current_doc_path() -> None`

#### Description:
This method sets the current document path for the DocWriter class. It is used to determine the path where the documentation file for the current snippet will be saved. This method belongs to the class DocWriter.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Sample code to set the current document path
doc_writer._set_current_doc_path()
```

#### How it Works:
The method starts by getting the parent directory of the current snippet's file path. Then, it extracts the file name without the extension from the snippet's file path. After that, it creates a Path object with the file name and the ".md" extension. Next, it constructs the document file path by joining the doc path, the file path, and the file doc. Finally, it sets the current document path of the DocWriter instance to the doc file path.

#### Dependencies:
- `ai_logic.documentor_chat.DocumentorChat`: This dependency is used to document the chat messages.
- `snippet_management.code_snippet.CodeSnippet`: This dependency is used to retrieve the current snippet's file path.
- `documentation_orchestrator.documentation_manager.DocumentationManager`: This dependency is used to manage the documentation process.
- `typing.Dict`: This dependency is used to define the type of the dictionary.
- `typing.ClassVar`: This dependency is used to define the type of the class variable.
- `pathlib.Path`: This dependency is used to manipulate file paths.
- `metaclasses.singleton_meta.SingletonMeta`: This dependency is used to implement the Singleton design pattern for the DocWriter class.