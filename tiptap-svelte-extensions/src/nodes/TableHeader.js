import { Node } from '../../../tiptap-svelte/src/index.js'
import TableNodes from './TableNodes'

export default class TableHeader extends Node {

  get name() {
    return 'table_header'
  }

  get schema() {
    return TableNodes.table_header
  }

}
