crystal_doc_search_index_callback({"repository_name":"cup","body":"# cup\n\nTODO: Write a description here\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     cup:\n       github: your-github-user/cup\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"cup\"\n```\n\nTODO: Write usage instructions here\n\n## Development\n\nTODO: Write development instructions here\n\n## Contributing\n\n1. Fork it (<https://github.com/your-github-user/cup/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [trollmao](https://github.com/your-github-user) - creator and maintainer\n","program":{"html_id":"cup/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"cup","program":true,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"cup/Cup","path":"Cup.html","kind":"module","full_name":"Cup","name":"Cup","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"src/cup.cr","line_number":2,"url":"https://github.com/trollmao/cup.cr/blob/fd1748d257ce022974502830f60985460fe5776a/src/cup.cr#L2"}],"repository_name":"cup","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.0\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"TODO: Write documentation for `Cup`","summary":"<p><span class=\"flag orange\">TODO</span>  Write documentation for <code><a href=\"Cup.html\">Cup</a></code></p>","class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"cup/Cup/URL","path":"Cup/URL.html","kind":"class","full_name":"Cup::URL","name":"URL","abstract":false,"superclass":{"html_id":"cup/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"cup/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"cup/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/cup.cr","line_number":5,"url":"https://github.com/trollmao/cup.cr/blob/fd1748d257ce022974502830f60985460fe5776a/src/cup.cr#L5"}],"repository_name":"cup","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"cup/Cup","kind":"module","full_name":"Cup","name":"Cup"},"doc":null,"summary":null,"class_methods":[],"constructors":[{"html_id":"new(url:String)-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[{"name":"url","doc":null,"default_value":"","external_name":"url","restriction":"String"}],"args_string":"(url : String)","args_html":"(url : String)","location":{"filename":"src/cup.cr","line_number":6,"url":"https://github.com/trollmao/cup.cr/blob/fd1748d257ce022974502830f60985460fe5776a/src/cup.cr#L6"},"def":{"name":"new","args":[{"name":"url","doc":null,"default_value":"","external_name":"url","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(url)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"frag-instance-method","name":"frag","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/cup.cr","line_number":25,"url":"https://github.com/trollmao/cup.cr/blob/fd1748d257ce022974502830f60985460fe5776a/src/cup.cr#L25"},"def":{"name":"frag","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return (@url.split(\"#\"))[1]"}},{"html_id":"host-instance-method","name":"host","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/cup.cr","line_number":13,"url":"https://github.com/trollmao/cup.cr/blob/fd1748d257ce022974502830f60985460fe5776a/src/cup.cr#L13"},"def":{"name":"host","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return ((@url.split(\"://\"))[1].split(\"/\"))[0]"}},{"html_id":"path-instance-method","name":"path","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/cup.cr","line_number":17,"url":"https://github.com/trollmao/cup.cr/blob/fd1748d257ce022974502830f60985460fe5776a/src/cup.cr#L17"},"def":{"name":"path","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return ((@url.split(\"://\"))[1].split(\"?\"))[0].sub(((@url.split(\"://\"))[1].split(\"/\"))[0], \"\")"}},{"html_id":"query-instance-method","name":"query","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/cup.cr","line_number":21,"url":"https://github.com/trollmao/cup.cr/blob/fd1748d257ce022974502830f60985460fe5776a/src/cup.cr#L21"},"def":{"name":"query","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return ((@url.split(\"?\"))[1].split(\"#\"))[0]"}},{"html_id":"scheme-instance-method","name":"scheme","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/cup.cr","line_number":9,"url":"https://github.com/trollmao/cup.cr/blob/fd1748d257ce022974502830f60985460fe5776a/src/cup.cr#L9"},"def":{"name":"scheme","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return (@url.split(\"://\"))[0]"}}],"macros":[],"types":[]}]}]}})