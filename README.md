# CLI

The command line interface agent for [Zeus](http://xiproject.github.io/zeus). This is a quick way to see all input and output going through Zeus.

## Prerequisites

- node v0.10.
- [bunyan](https://github.com/trentm/node-bunyan) for pretty printing logs.

## Installation

Clone the repo and run `npm install`.

## Run

```sh
$ node index.js --logfile cli.log 2>&1 | bunyan
```

## Usage

- Whatever you type into the CLI goes to Zeus as text input.
- Text output from Zeus shows up on the CLI.
- ctrl-P works for navigating history.

## License

GPLv3
