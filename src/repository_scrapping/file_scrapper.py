from repository_scrapping.code_scrapper import CodeScrapper
from snippet_management.code_snippet import CodeSnippet
from file_handler.file_handler import FileHandler
from doc_ignore.doc_ignore import DocIgnore
from git_tools.git_manager import GitManager
from pathlib import Path
from typing import List, Dict
from tree_sitter_logic.languages import FileExtension

class FileScrapper:
    _root_dir: Path
    _current_file: FileHandler
    _code_scrapper: CodeScrapper
    _ignore: DocIgnore

    def __init__(self, root_dir: Path = Path(".")):
        self._root_dir = root_dir
        self._ignore = DocIgnore(root_dir)
        self._code_scrapper = CodeScrapper()
        self._current_file = None

    def scrape_specified(self, specified_files: List[Path]) -> bool:
        for file_path in specified_files:
            if self._valid_file(file_path):
                self._start_scrape(file_path)
        return True

    @property
    def storage_dict(self) -> Dict[int, CodeSnippet]:
        return self._code_scrapper.storage_dict

    def _update_current_file(self, file_path: Path):
        self._current_file = FileHandler(file_path)

    def _start_scrape(self, file_path: Path):
        if file_path.suffix[1:] in FileExtension.__members__:
            self._update_current_file(file_path)
            self._code_scrapper.change_file(self._current_file)
            self._code_scrapper.extract_snippets()

    def _valid_file(self, sys_path: Path) -> bool:
        divide_path = str(sys_path).split("\\")
        return not (
            (any(path_name in self._ignore for path_name in divide_path))
            or (sys_path.suffix in self._ignore and sys_path.suffix != "")
            or (sys_path.name == ".docignore")
            or (sys_path.name == ".git")
            or (sys_path.name == ".gitignore")
            or (sys_path.name == "doc.log")
            or (sys_path.name == "documentor")
            or (sys_path.suffix != ".py" and sys_path.is_file())
        )
