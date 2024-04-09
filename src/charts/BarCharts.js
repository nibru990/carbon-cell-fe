import React, { useEffect, useState } from 'react'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
)

export const BarCharts = () => {

    const [chart, setChart] = useState([])

    var baseUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

    useEffect(() => {
        const fetchData = async () => {
            await fetch(baseUrl).then((response) => {
                response.json().then((json) => {
                    setChart(json.data)
                }).catch(error => {
                    console.log(error);
                })
            })
        }
        fetchData()
    }, [baseUrl])

    console.log("chart", chart);
    var data = {
        labels: chart?.map(x => x.Year),
        datasets: [{
            label: `United States`,
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
        maintainAspectRatio: true,
        scales: {
        },
        legend: {
            labels: {
                fontSize: 25,
            },
        },
        title: {
            display: true,
            text: "aloo"
        }
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
