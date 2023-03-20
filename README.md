# NodeJS Basics Assignments

## Assignment4 - Node.js CLI commands

1. `FORCE_COLOR` : The FORCE_COLOR environment variable is used to enable ANSI colorized output. The value may be:

    - `1`, `true`, or the empty string `''` indicate 16-color support,
    - `2` to indicate 256-color support, or
    - `3` to indicate 16 million-color support.

    When FORCE_COLOR is used and set to a supported value, both the NO_COLOR, and NODE_DISABLE_COLORS environment variables are ignored.

    Any other value will result in colorized output being disabled.

    ![FORCE_COLOR variable screenshot](./Assignment4/images/Image1.png)

2. `NODE_DEBUG` : The NODE_DEBUG environment variable is used to print Debug information for **core** modules. The value will be `','`-separated list of core modules.

    ![NODE_DEBUG variable screenshot](./Assignment4/images/Image2.png)

3. `NODE_DEBUG_NATIVE` : This environment variable is same as NODE_DEBUG but it is used to print low level Debug information from C++ modules present in Node.js implementation. The value for this variable will be `','`-separated list of core modules.

    ![NODE_DEBUG_NATIVE variable screenshot](./Assignment4/images/Image3.png)

4. `NODE_DISABLE_COLORS` : This environment variable is used to Disable Colors in Node stdout and REPL.

    ![NODE_DISABLE_COLORS variable screenshot](./Assignment4/images/Image4.png)

5. `NODE_EXTRA_CA_CERTS` : This variable can be used to add trusted root certificates to Node.js's certificate store, allowing you to establish secure HTTPS connections to servers that use these certificates.

    ![NODE_EXTRA_CA_CERTS variable screenshot](./Assignment4/images/Image5.png)

6. `NODE_NO_WARNINGS` : When set to 1, process warnings are silenced.

    ![NODE_NO_WARNINGS variable screenshot](./Assignment4/images/Image6.png)

7. `NODE_OPTIONS` : A space-separated list of command-line options. `options...` are interpreted before command-line options, so command-line options will override or compound after anything in `options...` Node.js will exit with an error if an option that is not allowed in the environment is used, such as -p or a script file.

    ![NODE_OPTIONS variable screenshot](./Assignment4/images/Image7.png)

8. `NODE_PATH` : This environment variable is used to expand the search for modules. By default Node.js looks for modules in  `node_modules/` directory in project root but using this environment variable we can specify other directories that contain modules. The value for this variable will be `':'`-separated list of directories prefixed to the module search path. On Windows, this is a `';'`-separated list instead.

    ![NODE_PATH variable screenshot](./Assignment4/images/Image8.png)

9. `NODE_PENDING_DEPRECATION` : When set to 1, emit pending deprecation warnings. Pending deprecations are generally identical to a runtime deprecation with the notable exception that they are turned off by default and will not be emitted unless either the `--pending-deprecation` command-line flag, or the `NODE_PENDING_DEPRECATION=1` environment variable, is set. Pending deprecations are used to provide a kind of selective *early warning* mechanism that developers may leverage to detect deprecated API usage.

    ![NODE_PENDING_DEPRECATION variable screenshot](./Assignment4/images/Image9.png)

10. `NODE_PENDING_PIPE_INSTANCES` :  Set the number of pending pipe instance handles when the pipe server is waiting for connections. This setting applies to Windows only.

    ![NODE_PENDING_PIPE_INSTANCES variable screenshot](./Assignment4/images/Image10.png)

11. `NODE_PRESERVE_SYMLINKS` : When set to 1, instructs the module loader to preserve symbolic links when resolving and caching modules.

    ![NODE_PRESERVE_SYMLINKS variable screenshot](./Assignment4/images/Image11.png)

12. `NODE_REDIRECT_WARNINGS` : When set, process warnings will be emitted to the given file instead of printing to stderr. The file will be created if it does not exist, and will be appended to if it does. If an error occurs while attempting to write the warning to the file, the warning will be written to stderr instead. This is equivalent to using the `--redirect-warnings=file` command-line flag.

    ![NODE_REDIRECT_WARNINGS variable screenshot](./Assignment4/images/Image12.png)

13. `NODE_REPL_HISTORY` : Path to the file used to store the persistent REPL history. The default path is `~/.node_repl_history`, which is overridden by this variable. Setting the value to an empty string (`''` or `' '`) disables persistent `REPL` history.

    ![NODE_REPL_HISTORY variable screenshot](./Assignment4/images/Image13.png)

14. `NODE_REPL_EXTERNAL_MODULE` : Path to a Node.js module which will be loaded in place of the built-in `REPL`. Overriding this value to an empty string (`''`) will use the built-in REPL.

    ![NODE_REPL_EXTERNAL_MODULE variable screenshot](./Assignment4/images/Image14.png)

15. `NODE_SKIP_PLATFORM_CHECK` : If `value` equals `'1'`, the check for a supported platform is skipped during Node.js startup. Node.js might not execute correctly. Any issues encountered on unsupported platforms will not be fixed.

    ![NODE_SKIP_PLATFORM_CHECK variable screenshot](./Assignment4/images/Image15.png)

16. `NODE_TLS_REJECT_UNAUTHORIZED` : If `value` equals `'0'`, certificate validation is disabled for TLS connections. This makes TLS, and HTTPS by extension, insecure. The use of this environment variable is strongly discouraged.

    ![NODE_TLS_REJECT_UNAUTHORIZED variable screenshot](./Assignment4/images/Image16.png)

17. `NODE_V8_COVERAGE` : When set, Node.js will begin outputting V8 JavaScript code coverage and Source Map data to the directory provided as an argument (coverage information is written as JSON to files with a coverage prefix). NODE_V8_COVERAGE will automatically propagate to subprocesses, making it easier to instrument applications that call the child_process.spawn() family of functions. NODE_V8_COVERAGE can be set to an empty string, to prevent propagation.

    ![NODE_V8_COVERAGE variable screenshot](./Assignment4/images/Image17.png)

18. `NO_COLOR` : This is an alias for `NODE_DISABLE_COLORS`. The value of the environment variable is arbitrary.

    ![NO_COLOR variable screenshot](./Assignment4/images/Image18.png)

19. `OPENSSL_CONF` : Load an OpenSSL configuration file on startup. Among other uses, this can be used to enable FIPS-compliant crypto if Node.js is built with ./configure `--openssl-fips`. If the `--openssl-config` command-line option is used, the environment variable is ignored.

    ![OPENSSL_CONF variable screenshot](./Assignment4/images/Image19.png)

20. `SSL_CERT_DIR` : If `--use-openssl-ca` is enabled, this overrides and sets OpenSSL's *directory* containing trusted certificates. Be aware that unless the child environment is explicitly set, this environment variable will be inherited by any child processes, and if they use OpenSSL, it may cause them to trust the same CAs as node.

    ![SSL_CERT_DIR variable screenshot](./Assignment4/images/Image20.png)

21. `SSL_CERT_FILE` : If `--use-openssl-ca` is enabled, this overrides and sets OpenSSL's *file* containing trusted certificates. Be aware that unless the child environment is explicitly set, this environment variable will be inherited by any child processes, and if they use OpenSSL, it may cause them to trust the same CAs as node.

    ![SSL_CERT_FILE variable screenshot](./Assignment4/images/Image21.png)

22. `TZ` : The TZ environment variable is used to specify the timezone configuration. While Node.js does not support all of the various ways that TZ is handled in other environments, it does support basic timezone IDs (such as `'Etc/UTC'`, `'Europe/Paris'`, or `'America/New_York'`). It may support a few other abbreviations or aliases, but these are strongly discouraged and not guaranteed.

    ![TZ variable screenshot](./Assignment4/images/Image22.png)

23. `UV_THREADPOOL_SIZE` : Set the number of threads used in libuv's threadpool to size threads.
    Asynchronous system APIs are used by Node.js whenever possible, but where they do not exist, libuv's threadpool is used to create asynchronous node APIs based on synchronous system APIs. Node.js APIs that use the threadpool are:

    - all fs APIs, other than the file watcher APIs and those that are explicitly synchronous
    - asynchronous crypto APIs such as crypto.pbkdf2(), crypto.scrypt(), crypto.randomBytes(), crypto.randomFill(), crypto.generateKeyPair()
    - dns.lookup()
    - all zlib APIs, other than those that are explicitly synchronous
    
    Because libuv's threadpool has a fixed size, it means that if for whatever reason any of these APIs takes a long time, other (seemingly unrelated) APIs that run in libuv's threadpool will experience degraded performance. In order to mitigate this issue, one potential solution is to increase the size of libuv's threadpool by setting the 'UV_THREADPOOL_SIZE' environment variable to a value greater than 4 (its current default value). For more information, see the libuv threadpool documentation.

    ![UV_THREADPOOL_SIZE variable screenshot](./Assignment4/images/Image23.png)


### Useful V8 Options

1. `--max-old-space-size` : Sets the max memory size of V8's old memory section. As memory consumption approaches the limit, V8 will spend more time on garbage collection in an effort to free unused memory. On a machine with 2 GiB of memory, consider setting this to 1536 (1.5 GiB) to leave some memory for other uses and avoid swapping.

    ![MAX_OLD_SPACE_SIZE v8 option screenshot](./Assignment4/images/Image24.png)

2. `--max-semi-space-size` : Sets the maximum semi-space size for V8's scavenge garbage collector in MiB (megabytes). Increasing the max size of a semi-space may improve throughput for Node.js at the cost of more memory consumption. Since the young generation size of the V8 heap is three times the size of the semi-space, an increase of 1 MiB to semi-space applies to each of the three individual semi-spaces and causes the heap size to increase by 3 MiB. The throughput improvement depends on your workload. The default value is *16 MiB* for 64-bit systems and *8 MiB* for 32-bit systems. To get the best configuration for your application, you should try different max-semi-space-size values when running benchmarks for your application.

    ![MAX_OLD_SPACE_SIZE v8 option screenshot](./Assignment4/images/Image25.png)

