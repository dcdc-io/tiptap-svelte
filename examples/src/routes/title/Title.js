import { Node } from "tiptap-svelte";

export default class Title extends Node {

  get name() {
    return 'title'
  }

  get schema() {
    return {
      content: 'inline*',
      parseDOM: [{
        tag: 'h1',
      }],
      toDOM: () => ['h1', 0],
    }
  }

}
