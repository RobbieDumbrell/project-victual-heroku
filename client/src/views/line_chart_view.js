const moment = require('moment');
const DatabaseRequest = require('../helpers/database_request.js');
const AllMinerals = require('../models/all_minerals.js');
const dotenv = require('dotenv');
dotenv.load();
const port = process.env.PORT;

const LineChartView = function (options, container) {
    this.options = options;
    this.container = container;
    this.allPotentialMinerals = AllMinerals.allPotentialMinerals;
}

LineChartView.prototype.bindEvents = function () {
    this.options.addEventListener('change', (event) => {
        this.nutrientToDisplay = event.target.value;
        this.createGraph(this.nutrientToDisplay);
    })
}

LineChartView.prototype.createGraph = function (nutrientToDisplay) {
    this.nutrientToDisplay = nutrientToDisplay;
    // this.databaseRequest = new DatabaseRequest(`http://localhost:3000/api/user_food_items`);
    this.databaseRequest = new DatabaseRequest(`${window.location.host}/api/user_food_items`);
    this.getDatesData(7);
    this.RDAData = [];
    this.populateGraph(this.datesData.length);
}

LineChartView.prototype.getDatesData = function(numberOfDays){
    this.datesData = [];
    for(let i = numberOfDays-1; i >= 0; i--){
        const date = moment().subtract(i, "days").format('YYYY-MM-DD');
        this.datesData.push(date);
    }
}

LineChartView.prototype.populateGraph = function(counter){
    if(counter <= 0){
        this.RDAData.reverse();
        this.render();
        return;
    };
    this.databaseRequest.getForDate(this.datesData[counter-1])
    .then((singleDaysData) => {
        this.RDAData.push(parseFloat(this.calculateTotal(singleDaysData)));
        counter--;
        this.populateGraph(counter);
    });
}

LineChartView.prototype.calculateTotal = function (allData) {
    let mineralKey = "";
    for (let mineral in this.allPotentialMinerals) {
        if (this.allPotentialMinerals[mineral] === this.nutrientToDisplay) {
            mineralKey = mineral;
        };
    }
    let totalPercentage = 0;
    for (const dataItem of allData) {
        if (dataItem.details[mineralKey]) {
            const amountOfUnits = dataItem.amount;
            totalPercentage += (dataItem.details[mineralKey].quantity * amountOfUnits);
        }
    }
    return totalPercentage.toFixed(2);
}

LineChartView.prototype.render = function () {
    this.container.innerHTML = "";
    this.displayChart();
}

LineChartView.prototype.displayChart = function () {
    Highcharts.chart('line-chart-container', {
        xAxis: {
            categories: this.datesData,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        series: [{
            name: '% of RDA',
            data: this.RDAData,
            pointPlacement: 'on'
        }],

        chart: {
            type: 'line'
        },
        title: {
            text: `Weekly ${this.nutrientToDisplay}`
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: ' '
            },
            min: 0
        },
        plotOptions: {
            series: {
                color: "#8EC63F"
            }
        }
    });
}

module.exports = LineChartView;
