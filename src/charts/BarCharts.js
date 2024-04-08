import React, { useEffect, useState } from 'react'
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

export const BarCharts = () => {

    const [chart, setChart] = useState([])

    var baseUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

    useEffect(() => {
        const fetchData = async () => {
            await fetch(baseUrl, {
                method: 'GET'
            }).then((response) => {
                response.json().then((json) => {
                    console.log(json);
                    setChart(json.data)
                }).catch(error => {
                    console.log(error);
                })
            })
        }
        fetchData()
    }, [])

    console.log("chart", chart);
    var data = {
        labels: chart?.map(x => x.Nation),
        datasets: [{
            label: `${chart?.coins?.length} Coins Available`,
            data: chart?.map(x => x.Population),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
            display: true,
            labels: {
                fontSize: 25,
            },
        },
    }

    return (
        <div>
        <Bar
            data={data}
            height={400}
            options={options}

        />
        </div>
    )
}
