# ByLine

Print out lines from a stream on a timer

This is just a sample project playing around with ES7
and Highland.js.  It has no *real* utility.

## `ByLine`

A Transform stream that takes two additional options:

* `lines`: How many lines should be read in before emitting
* `timeout`: How long to wait between each emission (ms)

## rx-scream-im example
Currently RxNode includes `Rx` which does *not* include
`Rx.Observable.prototype.pipe`.  Hopefully, this will be
fixed by [this pull request](https://github.com/Reactive-Extensions/RxJS/pull/786).

Until then, you can manually change `rx-node/index.js` to
include `rx/dist/rx.all` instead of `rx`.
