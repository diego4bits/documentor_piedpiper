from documentation_orchestrator.documentation_manager import DocumentationManager
from doc_writer.doc_writer import DocWriter
#GitManager.commit_doc_changes()
if __name__ == "__main__":
    DocumentationManager.start_documentation()
    DocWriter.start_writing_documentation()
    DocumentationManager.show_results()
