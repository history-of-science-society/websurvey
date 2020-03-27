module.exports = class simpleGraph {
  constructor(data, filter, name) {
    this.filteredData = data.filter(item => item.data[filter]);
    this.name = name;
    this.totalItems = this.filteredData.map(item => item.data[filter].value);
    this.uniqueOptions = [...new Set(this.totalItems)].sort();
    this.aggregatedData = this.uniqueOptions.map(option => {
      let count = 0;
      for (let i = 0; i < this.totalItems.length; i++) {
        if (this.totalItems[i] === option) {
          count++;
        }
      }
      return count;
    });
    this.configObject = {
      name: this.name,
      labels: this.aggregatedData,
      series: [{ name: this.name, data: this.aggregatedData }],
      categories: this.uniqueOptions
    };
  }
};
