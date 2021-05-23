<template>
  <div class="overflow-hidden">
    <my-header />
    <div class="flex flex-row w-full">
      <side-nav />
      <div class="flex flex-col w-9/12">
        <search-area />
        <table>
          <thead>
            <th v-for="header in headers" :key="header" @click="searchCol">
              <p>{{ header }}</p>
            </th>
          </thead>
          <tbody>
            <tr v-for="(value, name, index) in trs" :key="index">
              <td v-for="(val, i) in value" :key="i">
                <span>{{ val }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyFooter from '../../../components/MyFooter.vue'
import MyHeader from '../../../components/MyHeader.vue'
import SearchArea from '../../../components/SearchArea.vue'
export default {
  components: { MyHeader, MyFooter, SearchArea },
  data() {
    return {
      data: [],
      headers: [],
      trs: [],
    }
  },
  async fetch() {
    const singleFile = await this.$content(
      'data/' + this.$route.params.slug
    ).fetch()

    this.headers = Object.keys(singleFile.body[0])
    this.trs = singleFile.body
  },
  methods: {
    searchCol(event) {
      const column = event.target.parentElement
      const indexOfTableHead = Array.prototype.indexOf.call(
        column.parentElement.children,
        column
      )
      const currentIsAscending = column.classList.contains('asc')
      this.sortTableByColumn(indexOfTableHead, !currentIsAscending)
    },
    sortTableByColumn(indexOfTableHead, asc = 'false') {
      const direction = asc ? 1 : -1
      const table = document.querySelector('table')
      const tbody = table.tBodies[0]
      const rows = Array.from(tbody.querySelectorAll('tr'))
      const sortedRows = rows.sort((a, b) => {
        const aColText = a
          .querySelector(`td:nth-of-type(${indexOfTableHead + 1})`)
          .innerText.trim()
        const bColText = b
          .querySelector(`td:nth-of-type(${indexOfTableHead + 1})`)
          .innerText.trim()
        return aColText > bColText ? 1 * direction : -1 * direction
      })

      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
      }
      tbody.append(...sortedRows)
      table
        .querySelectorAll('th')
        .forEach((th) => th.classList.remove('asc', 'desc'))
      table
        .querySelector(`th:nth-of-type(${indexOfTableHead + 1})`)
        .classList.toggle('asc', asc)
      table
        .querySelector(`th:nth-of-type(${indexOfTableHead + 1})`)
        .classList.toggle('desc', !asc)
    },
  },
}
</script>

<style scoped>
table {
  width: 100%;
  overflow: auto;
  overflow-y: scroll;
  overflow-x: scroll;
  display: block;
  max-height: 100vh;
  padding: 20px;
  border-collapse: collapse;
}
tbody {
  overflow-y: scroll;
  overflow: auto;
}
tr {
  height: 45px;
}
th {
  cursor: pointer;
}
th:not(:first-child) {
  padding-left: 15px;
}
td {
  white-space: pre;
  text-align: left;
}
td:not(:first-child) {
  padding-left: 15px;
}

p {
  display: flex;
  align-self: flex-start;
  white-space: pre;
  align-items: center;
}
span:not(:first-child) {
  padding-left: 15px;
  display: flex;
}
.asc p::after {
  content: '';
  background-image: url(assets/icons/arrow-up.svg);
  background-size: 16px 16px;
  width: 16px;
  height: 16px;
  display: flex;
  margin-left: 3px;
}
.desc p::after {
  content: '';
  background-image: url(assets/icons/arrow-down.svg);
  background-size: 16px 16px;
  width: 16px;
  height: 16px;
  display: flex;
  margin-left: 3px;
}
</style>
