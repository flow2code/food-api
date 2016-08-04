# https://github.com/jgm/pandocfilters/ is necessary to build graphs

title:="Food app documentation"
files:=sources/*.md
common_params:=--filter=./scripts/graphviz.py --toc -V title=$(title) --toc-depth=4
no_edit_message = "<!-- DON'T EDIT THIS FILE!! This is a file built from the source .md files (see Makefile). The build process will override changes made to this file. Edit other .md files instead. -->\n\n\n"
output:=DOCS

md: ./*.md
	rm -rf ./graphviz-images
	mkdir -p graphviz-images
	pandoc $(files)  $(common_params) \
		--standalone \
		-t markdown_github \
		--template=./templates/markdown.markdown \
		-o __temp.md
	echo $(no_edit_message) > $(output).md
	cat __temp.md >> $(output).md
	sed -i "s/<div class=\"wide\">//" $(output).md
	sed -i "s/<\/div>//" $(output).md
	sed -i "s/<\/pre>/<\/pre>\n/" $(output).md

	rm __temp.md

html: ./*.md 
	rm -rf ./graphviz-images
	mkdir -p graphviz-images
	pandoc $(files) $(common_params) \
		-H templates/style.inc \
		--highlight-style=kate \
		--title=$(title) \
		--template=./templates/html.html \
		-o __temp.html;
	echo $(no_edit_message) > $(output).html
	cat __temp.html >> $(output).html
	rm __temp.html
