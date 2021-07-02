<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Struktura katalogów dla Firmy Samochodowej</h1>

    <button @click="addNode">Dodaj Nowy Katalog</button>

    <vue-tree-list
        :model="MyTree"
        default-tree-node-name="katalog"
        default-leaf-node-name="item"
        @delete-node="onDel"
        @add-node="onAddNode"
    >
      <span class="icon" title="Dodaj nowa kategorie" slot="addTreeNodeIcon">＋</span>
      <span class="icon" slot="addLeafNodeIcon"></span>
      <span class="icon" slot="editNodeIcon">📃</span>
      <span class="icon" slot="delNodeIcon">✂️</span>
    </vue-tree-list>

  </div>
</template>

<script>
import { TreeNode,  Tree } from 'vue-tree-list'

export default {
  name: 'HelloWorld',

  props: {
    msg: String,

  },
  data: () => ({
      MyTree: new Tree([
          {name: "Opel", children: [
                  {name: "silnik", children: null},
                  {name: "koła", children: null},
                  {name: "podwozie", children: null},
              ]},
          {name: "VW", children: [
                  {name: "silnik", children: [
                          {name: "1,6"},
                          {name: "1,8 TDI"}
                      ]},
                  {name: "koła", children: null},
                  {name: "podwozie", children: null},
              ]},
          {name: "Skoda"}
      ])
  }),
    methods: {
        onDel(node) {
            console.log(node)
            node.remove()
        },
        onAddNode(params) {
            console.log(params)
        },
        addNode() {
            var node = new TreeNode({ name: 'Nowy Katalog', isLeaf: false })
            if (!this.MyTree.children) this.MyTree.children = []
            this.MyTree.addChildren(node)
        },
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
