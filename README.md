# ByLine

Print out lines from a stream on a timer

This is just a sample project playing around with ES7
and Highland.js.  It has no *real* utility.

## `ByLine`

A Transform stream that takes two additional options:

* `lines`: How many lines should be read in before emitting
* `timeout`: How long to wait between each emission (ms)
