import React, { useEffect, useState } from 'react';
import {
    ComposedChart,
    Area,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 1590,
        pv: 800,
        amt: 1400,
        cnt: 490
    },
    {
        name: "Page B",
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590
    },
    {
        name: "Page C",
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350
    },
    {
        name: "Page D",
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480
    },
    {
        name: "Page E",
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460
    },
    {
        name: "Page F",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    }
];

const Statistics = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./productsData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products);

    return (
        <div>
            <div className="text-center bg-purple-600 p-10">
                <div className=" max-w-6xl mx-auto flex flex-col items-center text-white space-y-6">
                    <h1 className="text-5xl">Dashboard</h1>
                    <p className='border w-[700px]'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                </div>
            </div>

            <div className='max-w-6xl mx-auto mb-40'>
                <h2 className='text-2xl font-semibold py-6'>Statistics</h2>
                <div className='bg-white rounded-2xl my-6'>
                    <ComposedChart
                        width={1100}
                        height={500}
                        data={products}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" scale="band" padding={{ left: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" barSize={25} fill="#9538E2" />
                        {/* <Line type="monotone" dataKey="price" stroke="#5dade2" /> */}
                        <Area name='total' type="monotone" dataKey="price" stackId="1" stroke="#8884d8" fill="#c39bd3" />
                        <Bar dataKey="Rating" fill="#FF0000" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;