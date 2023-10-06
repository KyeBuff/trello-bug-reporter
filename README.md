# Trello Bug Reporter

https://www.loom.com/share/b8689a7f9f9841778caa91542c9ae903?sid=4aac93bf-f728-4e4d-ba10-c5aa44982c8c

A simple bug reporter for Trello which allows you to automatically create bug report cards in Trello.

The bug reporter will automatically attach a screenshot to the card and assign a priority to the card.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
  - [Specify a Trello board and list](#specify-a-trello-board-and-list)
  - [Board ID](#board-id)
  - [List ID](#list-id)
- [Installation](#installation)
- [Usage](#usage)

## Features

- [x] Automatically generate a bug report card in Trello
- [x] Automatically attach a screenshot to the bug report card
- [x] Assign a priority to the bug report card
- [] Automatically attach a log file to the bug report card
- [] Automatically attach a video to the bug report card

## Requirements

You will need to generate a Trello API key and secret. You can do so using Trello's [New Power-Up or Integration
form](https://trello.com/power-ups/admin/new).

Your API credentials will be specific to your chosen workspace.

Once you have generated your key and secret pair. You will need to manually generate a token which can be done by clicking on the `Token` link as shown below.

<img src="https://github.com/KyeBuff/trello-bug-reporter/raw/main/README_assets/token_generation.png" alt="Trello's power up form showing how to manually generate a token">

Use the generated token and key to [initialise the bug reporter](#usage).

### Specify a Trello board and list

You will need to specify a board and list to which the bug reports will be sent. You can do so by creating a new board and list in Trello (or by using an existing board).

### Board ID

You can then retrieve the board ID by appending `.json` to the end of the board URL. The board ID will be the value of the `id` property in the JSON response - this will be the first ID value at the very top-right of an unformatted JSON response.

URL example: `https://trello.com/b/123456789/my-board-name.json` where `https://trello.com/b/123456789/my-board-name` would be the typical URL to reach the board.

### List ID

You can retrieve the list ID clicking on a card in the list and exporting the card as JSON, steps below:

1. Open the card
2. Click Share at the bottom
3. Click Export JSON
4. Search that file for "idList"

There may be multiple instances of "idList" in the JSON file - you are looking for the first instance.

## Installation

```bash
npm i trello-bug-reporter
```

## Usage

Once you have installed the package and you have your API key, token and Trello IDs, you can use the following code to create a bug reporter instance:

```typescript
import BugTool from "trello-bug-reporter";

BugTool.init({
  token: "",
  key: "",
  boardId: "",
  listId: "",
});
```

### Priority dropdown

The bug reporter will fetch and render a dropdown of Trello labels which are used to prioritise the bug ticket.
