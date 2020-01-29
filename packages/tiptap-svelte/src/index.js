export { default as Editor } from './Editor'
export { Extension, Node, Mark } from './Utils'
export { Doc, Paragraph, Text } from './Nodes'
export { default as EditorContent } from './Components/EditorContent.svelte'
export { default as EditorMenuBar } from './Components/EditorMenuBar.svelte'
export { default as EditorMenuBubble } from './Components/EditorMenuBubble.svelte'
export { default as EditorFloatingMenu } from './Components/EditorFloatingMenu.svelte'
export {
  Plugin,
  PluginKey,
  TextSelection,
  NodeSelection,
} from 'prosemirror-state'
