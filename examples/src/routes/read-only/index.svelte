<script>
  import { onMount, onDestroy } from "svelte";
  import Icon from "../../components/Icon";
  import { Editor, EditorContent } from "tiptap-svelte";
  import {
    HardBreak,
    Heading,
    Bold,
    Code,
    Italic,
    Link
  } from "tiptap-svelte-extensions";

  let editor;
  let editable = false;

  onMount(() => {
    editor = new Editor({
      editable: false,
      extensions: [
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new Link(),
        new Bold(),
        new Code(),
        new Italic()
      ],
      content: `
          <h2>
            Read-Only
          </h2>
          <p>
            This text is <strong>read-only</strong>. You are not able to edit something. <a href="https://scrumpy.io/">Links to fancy websites</a> are still working.
          </p>
        `
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });

  function handleChange() {
    editor.setOptions({
      editable
    });
  }
</script>

<style lang="scss" global>
  .checkbox {
    margin-bottom: 1rem;
  }
</style>

{#if editor}
  <div class="editor">
    <div class="checkbox">
      <input
        type="checkbox"
        id="editable"
        bind:checked={editable}
        on:change={handleChange} />
      <label for="editable">editable</label>
    </div>

    <EditorContent class="editor__content" {editor} />
  </div>
{/if}
