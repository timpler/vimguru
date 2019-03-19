export interface CommandData {
  command: string[];
  description: string;
  examples?: string[];
}

export interface CategoryData {
  name: string;
  items: CommandData[];
}

export const categories: CategoryData[] = [
  {
    name: 'Global',
    items: [
      { command: [':help keyword'], description: `open help for keyword` },
      { command: [':saveas file'], description: `save file as` },
      { command: [':close'], description: `close current pane` },
      {
        command: ['K'],
        description: `open man page for word under the cursor`,
      },
    ],
  },
  {
    name: 'Cursor movement',
    items: [
      { command: ['h'], description: `move left` },
      { command: ['j'], description: `move down` },
      { command: ['k'], description: `move up` },
      { command: ['l'], description: `move right` },
      { command: ['H'], description: `move to top of screen` },
      { command: ['M'], description: `move to middle of screen` },
      { command: ['L'], description: `move to bottom of screen` },
      { command: ['w'], description: `jump forwards to the start of a word` },
      {
        command: ['W'],
        description: `jump forwards to the start of a word (words can contain punctuation)`,
      },
      { command: ['e'], description: `jump forwards to the end of a word` },
      {
        command: ['E'],
        description: `jump forwards to the end of a word (words can contain punctuation)`,
      },
      { command: ['b'], description: `jump backwards to the start of a word` },
      {
        command: ['B'],
        description: `jump backwards to the start of a word (words can contain punctuation)`,
      },
      {
        command: ['%'],
        description: `move to matching character (default supported pairs: '()', '{}', '[]' - use <code>:h matchpairs</code> in vim for more info)`,
      },
      { command: ['0'], description: `jump to the start of the line` },
      {
        command: ['^'],
        description: `jump to the first non-blank character of the line`,
      },
      { command: ['$'], description: `jump to the end of the line` },
      {
        command: ['g_'],
        description: `jump to the last non-blank character of the line`,
      },
      { command: ['gg'], description: `go to the first line of the document` },
      { command: ['G'], description: `go to the last line of the document` },
      { command: ['5G'], description: `go to line 5` },
      {
        command: ['fx'],
        description: `jump to next occurrence of character x`,
      },
      {
        command: ['tx'],
        description: `jump to before next occurrence of character x`,
      },
      {
        command: ['Fx'],
        description: `jump to previous occurence of character x`,
      },
      {
        command: ['Tx'],
        description: `jump to after previous occurence of character x`,
      },
      { command: [';'], description: `repeat previous f, t, F or T movement` },
      {
        command: [','],
        description: `repeat previous f, t, F or T movement, backwards`,
      },
      {
        command: ['}'],
        description: `jump to next paragraph (or function/block, when editing code)`,
      },
      {
        command: ['{'],
        description: `jump to previous paragraph (or function/block, when editing code)`,
      },
      { command: ['zz'], description: `center cursor on screen` },
    ],
  },
  {
    name: 'Insert mode - inserting/appending text',
    items: [
      { command: ['i'], description: `insert before the cursor` },
      { command: ['I'], description: `insert at the beginning of the line` },
      { command: ['a'], description: `insert (append) after the cursor` },
      {
        command: ['A'],
        description: `insert (append) at the end of the line`,
      },
      {
        command: ['o'],
        description: `append (open) a new line below the current line`,
      },
      {
        command: ['O'],
        description: `append (open) a new line above the current line`,
      },
      {
        command: ['ea'],
        description: `insert (append) at the end of the word`,
      },
      { command: ['Esc'], description: `exit insert mode` },
    ],
  },
  {
    name: 'Editing',
    items: [
      { command: ['r'], description: `replace a single character` },
      {
        command: ['J'],
        description: `join line below to the current one with one space in between`,
      },
      {
        command: ['gJ'],
        description: `join line below to the current one without space in between`,
      },
      { command: ['gwip'], description: `reflow paragraph` },
      { command: ['cc'], description: `change (replace) entire line` },
      {
        command: ['c$'],
        description: `change (replace) to the end of the line`,
      },
      { command: ['ciw'], description: `change (replace) entire word` },
      {
        command: ['cw'],
        description: `change (replace) to the end of the word`,
      },
      { command: ['s'], description: `delete character and substitute text` },
      {
        command: ['S'],
        description: `delete line and substitute text (same as cc)`,
      },
      {
        command: ['xp'],
        description: `transpose two letters (delete and paste)`,
      },
      { command: ['u'], description: `undo` },
      { command: ['Ctrl + r'], description: `redo` },
      { command: ['.'], description: `repeat last command` },
    ],
  },
  {
    name: 'Marking text (visual mode)',
    items: [
      {
        command: ['v'],
        description: `start visual mode, mark lines, then do a command (like y-yank)`,
      },
      { command: ['V'], description: `start linewise visual mode` },
      { command: ['o'], description: `move to other end of marked area` },
      { command: ['Ctrl + v'], description: `start visual block mode` },
      { command: ['O'], description: `move to other corner of block` },
      { command: ['aw'], description: `mark a word` },
      { command: ['ab'], description: `a block with ()` },
      { command: ['aB'], description: `a block with {}` },
      { command: ['ib'], description: `inner block with ()` },
      { command: ['iB'], description: `inner block with {}` },
      { command: ['Esc'], description: `exit visual mode` },
    ],
  },
  {
    name: 'Visual commands',
    items: [
      { command: ['&#62;'], description: `shift text right` },
      { command: ['&#60;'], description: `shift text left` },
      { command: ['y'], description: `yank (copy) marked text` },
      { command: ['d'], description: `delete marked text` },
      { command: ['~'], description: `switch case` },
    ],
  },
  {
    name: 'Registers',
    items: [
      { command: [':reg'], description: `show registers content` },
      { command: ['"xy'], description: `yank into register x` },
      { command: ['"xp'], description: `paste contents of register x` },
    ],
  },
  {
    name: 'Marks',
    items: [
      { command: [':marks'], description: `list of marks` },
      { command: ['ma'], description: `set current position for mark A` },
      { command: ['`a'], description: `jump to position of mark A` },
      { command: ['y`a'], description: `yank text to position of mark A` },
    ],
  },
  {
    name: 'Macros',
    items: [
      { command: ['qa'], description: `record macro a` },
      { command: ['q'], description: `stop recording macro` },
      { command: ['@a'], description: `run macro a` },
      { command: ['@@'], description: `rerun last run macro` },
    ],
  },
  {
    name: 'Cut and paste',
    items: [
      { command: ['yy'], description: `yank (copy) a line` },
      { command: ['2yy'], description: `yank (copy) 2 lines` },
      {
        command: ['yw'],
        description: `yank (copy) the characters of the word from the cursor position to the start of the next word`,
      },
      { command: ['y$'], description: `yank (copy) to end of line` },
      {
        command: ['p'],
        description: `put (paste) the clipboard after cursor`,
      },
      { command: ['P'], description: `put (paste) before cursor` },
      { command: ['dd'], description: `delete (cut) a line` },
      { command: ['2dd'], description: `delete (cut) 2 lines` },
      {
        command: ['dw'],
        description: `delete (cut) the characters of the word from the cursor position to the start of the next word`,
      },
      { command: ['D'], description: `delete (cut) to the end of the line` },
      { command: ['d$'], description: `delete (cut) to the end of the line` },
      { command: ['x'], description: `delete (cut) character` },
    ],
  },
  {
    name: 'Exiting',
    items: [
      {
        command: [':w'],
        description: `write (save) the file, but don't exit`,
      },
      {
        command: [':w !sudo tee %'],
        description: `write out the current file using sudo`,
      },
      { command: [':wq'], description: `write (save) and quit` },
      {
        command: [':q'],
        description: `quit (fails if there are unsaved changes)`,
      },
      { command: [':q!'], description: `quit and throw away unsaved changes` },
      { command: [':wqa'], description: `write (save) and quit on all tabs` },
    ],
  },
  {
    name: 'Search and replace',
    items: [
      { command: ['/pattern'], description: `search for pattern` },
      { command: ['?pattern'], description: `search backward for pattern` },
      {
        command: ['\vpattern'],
        description: `'very magic' pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)`,
      },
      { command: ['n'], description: `repeat search in same direction` },
      { command: ['N'], description: `repeat search in opposite direction` },
      {
        command: [':%s/old/new/g'],
        description: `replace all old with new throughout file`,
      },
      {
        command: [':%s/old/new/gc'],
        description: `replace all old with new throughout file with confirmations`,
      },
      {
        command: [':noh'],
        description: `remove highlighting of search matches`,
      },
    ],
  },
  {
    name: 'Search in multiple files',
    items: [
      {
        command: [':vimgrep /pattern/ {file}'],
        description: `search for pattern in multiple files`,
        examples: [`:vimgrep /foo/ **/*`],
      },

      { command: [':cn'], description: `jump to the next match` },
      { command: [':cp'], description: `jump to the previous match` },
      {
        command: [':copen'],
        description: `open a window containing the list of matches`,
      },
    ],
  },
  {
    name: 'Working with multiple files',
    items: [
      { command: [':e file'], description: `edit a file in a new buffer` },
      { command: [':bnext'], description: `go to the next buffer` },
      { command: [':bprev'], description: `go to the previous buffer` },
      { command: [':bd'], description: `delete a buffer (close a file)` },
      { command: [':ls'], description: `list all open buffers` },
      {
        command: [':sp file'],
        description: `open a file in a new buffer and split window`,
      },
      {
        command: [':vsp file'],
        description: `open a file in a new buffer and vertically split window`,
      },
      { command: ['Ctrl + w'], description: `split window` },
      { command: ['Ctrl + w'], description: `switch windows` },
      { command: ['Ctrl + w'], description: `quit a window` },
      { command: ['Ctrl + w'], description: `split window vertically` },
      {
        command: ['Ctrl + w'],
        description: `move cursor to the left window (vertical split)`,
      },
      {
        command: ['Ctrl + w'],
        description: `move cursor to the right window (vertical split)`,
      },
      {
        command: ['Ctrl + w'],
        description: `move cursor to the window below (horizontal split)`,
      },
      {
        command: ['Ctrl + w'],
        description: `move cursor to the window above (horizontal split)`,
      },
    ],
  },
  {
    name: 'Tabs',
    items: [
      { command: [':tabnew'], description: `open a file in a new tab` },
      {
        command: ['Ctrl + w'],
        description: `move the current split window into its own tab`,
      },
      { command: ['gt'], description: `move to the next tab` },
      { command: ['gT'], description: `move to the previous tab` },
      { command: ['#gt'], description: `move to tab number #` },
      {
        command: [':tabmove #'],
        description: `move current tab to the #th position (indexed from 0)`,
      },
      {
        command: [':tabclose'],
        description: `close the current tab and all its windows`,
      },
      {
        command: [':tabonly'],
        description: `close all tabs except for the current one`,
      },
      {
        command: [':tabdo'],
        description: ` command - run the <code>command</code> on all tabs (e.g. <code>:tabdo q</code> - closes all opened tabs)`,
      },
    ],
  },
];
