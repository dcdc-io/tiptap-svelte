import { Doc } from "tiptap-svelte";

export default class CustomDoc extends Doc {

  get schema() {
    return {
      content: 'title block+',
    }
  }

}
